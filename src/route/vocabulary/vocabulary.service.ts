import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateVocabularyByAiDto, VocabularyByArticleDto, VocabularyResponseDto } from "./vocabulary.dto";
import {
  crawlCambridgeDictionary,
  crawlCambridgeEnglishDictionary,
  mapCambridgePos,
  mapToVocabularyDto,
  processVocabularyData,
} from "./vocabulary.helper";
import { CambridgeResult } from "./vocabulary.types";
import { PrismaService } from "../../shared/service/prisma.service";
import { PartOfSpeech } from "generated/prisma";
import { GeminiService } from "src/shared/service/ai.service";
import { MulterFile } from "src/types/multer-file";
import { UploadService } from "src/shared/service/upload.service";

@Injectable()
export class VocabularyService {
  constructor(private prisma: PrismaService,
    private readonly geminiService: GeminiService,
    private readonly uploadService: UploadService,
  ) {}

  async getVocabulary(
    word: string,
    requestedPartOfSpeech?: PartOfSpeech,
  ): Promise<VocabularyResponseDto> {
    try {
      const normalizedWord = word.toLowerCase().trim();
      if (requestedPartOfSpeech) {
        // Tìm từ với POS cụ thể
        const cached = await this.prisma.dictionaryWord.findUnique({
          where: {
            word_partOfSpeech: {
              word: normalizedWord,
              partOfSpeech: requestedPartOfSpeech,
            },
          },
        });

        if (cached) {
          console.log("Tìm thấy từ với POS cụ thể trong database");
          return mapToVocabularyDto(cached);
        }
      } else {
        // Tìm tất cả POS của từ
        const cached = await this.prisma.dictionaryWord.findFirst({
          where: {
            word: normalizedWord,
          },
        });

        if (cached) {
          console.log("Tìm thấy từ trong database");
          return mapToVocabularyDto(cached);
        }
      }

      // Nếu không có trong database, fetch từ Cambridge
      const [cambridgeData, cambridgeEnglishData] = await Promise.all([
        crawlCambridgeDictionary(word),
        crawlCambridgeEnglishDictionary(word),
      ]);

      if (cambridgeData.status === "error" || !cambridgeData.entries?.length) {
        throw new Error("Word not found in Cambridge Dictionary");
      }

      // Get all available parts of speech
      const allPartOfSpeech = cambridgeData.entries
        .map((entry) => mapCambridgePos(entry.part_of_speech))
        .filter(Boolean) as PartOfSpeech[];

      // Xử lý và lưu từng POS
      const results: VocabularyResponseDto[] = [];

      for (const pos of allPartOfSpeech) {
        const entry = cambridgeData.entries.find(
          (e) => mapCambridgePos(e.part_of_speech) === pos,
        );
        if (!entry) continue;
        // Xử lý dữ liệu từ Cambridge
        const processedData = processVocabularyData(
          entry,
          pos,
          allPartOfSpeech,
          cambridgeEnglishData,
        );

        // Lưu vào database
        const result = await this.prisma.dictionaryWord.upsert({
          where: {
            word_partOfSpeech: {
              word: normalizedWord,
              partOfSpeech: pos,
            },
          },
          update: {
            ...processedData,
            updatedAt: new Date(),
          },
          create: {
            word: normalizedWord,
            partOfSpeech: pos,
            ...processedData,
          },
        });

        results.push(mapToVocabularyDto(result));
      }

      // Trả về kết quả phù hợp với yêu cầu
      if (requestedPartOfSpeech) {
        const requested = results.find(
          (r) => r.partOfSpeech === requestedPartOfSpeech,
        );
        if (!requested) {
          throw new Error(
            `No entry found for part of speech: ${requestedPartOfSpeech}`,
          );
        }
        return requested;
      }

      // Nếu không có yêu cầu POS cụ thể, trả về POS đầu tiên
      return results[0];
    } catch (error) {
      console.error("Error in getVocabulary:", error);
      throw error;
    }
  }
  async createVocabularyByAi(dto: CreateVocabularyByAiDto, userId: string) {
    try {
      const studySet = await this.prisma.studySet.findUnique({
        where: { id: dto.idStudySet },
      });
      if (!studySet) {
        throw new NotFoundException("Study set not found");
      }
      const existingVocabulary = await this.prisma.vocabulary.findMany({
        where: {
          studySetId: dto.idStudySet,
        },
      });
      // mảng string các từ đã tồn tại
      const existingVocabularyWords: string[] = existingVocabulary.map((v) => v.word);
      const suggestedVocabulary: string[] = await this.geminiService.generateVocabulary(studySet.title ?? '', studySet.description ?? '',existingVocabularyWords);
      const finalVocabulary: VocabularyResponseDto[] = [];
      for (const word of suggestedVocabulary) {
        const vocabulary = await this.getVocabulary(word);
        if (vocabulary) {
          finalVocabulary.push(vocabulary);
        }
      }
  
      return finalVocabulary;
    } catch (error) {
      console.error("Error in createVocabularyByAi:", error);
      throw error;
    }
  }
  async searchVocabulary(
    word: string,
    language: string,
  ): Promise<CambridgeResult> {
    if (language === "en") {
      const data = await crawlCambridgeEnglishDictionary(word);
      return data;
    } else {
      const data = await crawlCambridgeDictionary(word);
      return data;
    }
  }

  async createVocabularyByArticle(file: MulterFile, userId: string) : Promise<VocabularyByArticleDto | undefined> {
    try {
      const uploadedFile = await this.uploadService.uploadArticle(file, userId);
      const text = uploadedFile.data.text;
      if (!text) {
        throw new BadRequestException("Text not found");
      }
      const vocabulary = await this.geminiService.generateVocabularyByArticle(text);
      const finalVocabulary: VocabularyResponseDto[] = [];
      for (const word of vocabulary) {
        try {
          const vocabulary = await this.getVocabulary(word);
          if (vocabulary) {
            finalVocabulary.push(vocabulary);
          }
        } catch (error) {
          console.error("Error in getVocabulary:", error);
        }
      }
      return {
        text: text,
        vocabulary: finalVocabulary,
      };
     
    } catch (error) {
      console.error("Error in uploadArticle:", error);
      throw error;
    }
  }

  async analyzeText(text: string, userId: string): Promise<VocabularyByArticleDto> {
    try {
      // Validate text length
      if (text.length > 20000) {
        throw new BadRequestException("Text is too long. Maximum 20,000 characters.");
      }

      // AI analyze text to extract vocabulary words
      const words = await this.geminiService.generateVocabularyByArticle(text);
      
      // Get full vocabulary info for each word
      const finalVocabulary: VocabularyResponseDto[] = [];
      for (const word of words) {
        try {
          const vocabulary = await this.getVocabulary(word);
          if (vocabulary) {
            finalVocabulary.push(vocabulary);
          }
        } catch (error) {
          console.warn(`Failed to get vocabulary for "${word}":`, error.message);
          // Continue with next word
        }
      }

      return {
        text: text,
        vocabulary: finalVocabulary,
      };
    } catch (error) {
      console.error("Error in analyzeText:", error);
      throw error;
    }
  }
}
