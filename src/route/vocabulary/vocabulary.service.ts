import { Injectable } from '@nestjs/common';
import { PartOfSpeech, VocabularyResponseDto } from './vocabulary.dto';
import { 
    crawlCambridgeDictionary, 
    crawlCambridgeEnglishDictionary,
    mapCambridgePos,
    mapToVocabularyDto,
    processVocabularyData
} from './vocabulary.helper';
import { CambridgeResult } from './vocabulary.types';
import { PrismaService } from '../../shared/service/prisma.service';

@Injectable()
export class VocabularyService {
    constructor(private prisma: PrismaService) {}

    async getVocabulary(word: string, requestedPartOfSpeech?: PartOfSpeech): Promise<VocabularyResponseDto> {
        try {
            const normalizedWord = word.toLowerCase().trim();      
            if (requestedPartOfSpeech) {
                // Tìm từ với POS cụ thể
                const cached = await this.prisma.dictionaryWord.findUnique({
                    where: {
                        word_partOfSpeech: {
                            word: normalizedWord,
                            partOfSpeech: requestedPartOfSpeech
                        }
                    }
                });

                if (cached) {
                    console.log("Tìm thấy từ với POS cụ thể trong database");
                    return mapToVocabularyDto(cached);
                }
            } else {
                // Tìm tất cả POS của từ
                const cached = await this.prisma.dictionaryWord.findFirst({
                    where: {
                        word: normalizedWord
                    }
                });

                if (cached) {
                    console.log("Tìm thấy từ trong database");
                    return mapToVocabularyDto(cached);
                }
            }

            // Nếu không có trong database, fetch từ Cambridge
            const [cambridgeData, cambridgeEnglishData] = await Promise.all([
                crawlCambridgeDictionary(word),
                crawlCambridgeEnglishDictionary(word)
            ]);

            if (cambridgeData.status === 'error' || !cambridgeData.entries?.length) {
                throw new Error('Word not found in Cambridge Dictionary');
            }

            // Get all available parts of speech
            const allPartOfSpeech = cambridgeData.entries
                .map(entry => mapCambridgePos(entry.part_of_speech))
                .filter(Boolean) as PartOfSpeech[];

            // Xử lý và lưu từng POS
            const results: VocabularyResponseDto[] = [];

            for (const pos of allPartOfSpeech) {
                const entry = cambridgeData.entries.find(
                    e => mapCambridgePos(e.part_of_speech) === pos
                );
                if (!entry) continue;
                // Xử lý dữ liệu từ Cambridge
                const processedData = processVocabularyData(
                    entry,
                    pos,
                    allPartOfSpeech,
                    cambridgeEnglishData
                );

                // Lưu vào database
                const result = await this.prisma.dictionaryWord.upsert({
                    where: {
                        word_partOfSpeech: {
                            word: normalizedWord,
                            partOfSpeech: pos
                        }
                    },
                    update: {
                        ...processedData,
                        updatedAt: new Date()
                    },
                    create: {
                        word: normalizedWord,
                        partOfSpeech: pos,
                        ...processedData
                    }
                });

                results.push(mapToVocabularyDto(result));
            }

            // Trả về kết quả phù hợp với yêu cầu
            if (requestedPartOfSpeech) {
                const requested = results.find(r => r.partOfSpeech === requestedPartOfSpeech);
                if (!requested) {
                    throw new Error(`No entry found for part of speech: ${requestedPartOfSpeech}`);
                }
                return requested;
            }

            // Nếu không có yêu cầu POS cụ thể, trả về POS đầu tiên
            return results[0];
        } catch (error) {
            console.error('Error in getVocabulary:', error);
            throw error;
        }
    }

    async searchVocabulary(word: string): Promise<CambridgeResult> {
        const data = await crawlCambridgeDictionary(word);
        const dataEnglish = await crawlCambridgeEnglishDictionary(word);
        console.log(data);
        console.log(dataEnglish);
        return dataEnglish;
    }
}
