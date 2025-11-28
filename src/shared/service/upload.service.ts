import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { MulterFile } from "src/types/multer-file";

@Injectable()
export class UploadService {
  private readonly logger = new Logger(UploadService.name);

  async uploadArticle(file: MulterFile, userId: string) {
    if (!file) throw new BadRequestException('File is required');
    if (file.mimetype !== 'application/pdf') throw new BadRequestException('Only PDF files are supported');

    try {
      // pdf-parse v2.x là ES Module, cần dùng dynamic import và lấy PDFParse class
      const pdfParseModule = await import('pdf-parse');
      
      
      
      // Lấy PDFParse class từ module
      const PDFParse = (pdfParseModule as any).PDFParse || (pdfParseModule as any).default?.PDFParse;
      
      if (!PDFParse) {
        this.logger.error('PDFParse class not found in module');
        throw new Error('Cannot find PDFParse class in pdf-parse module');
      }

      // Khởi tạo parser với options
      const parser = new PDFParse({
        data: file.buffer,
        verbosity: 0,
      });
      
      // Extract text
      const textResult = await parser.getText();
      
      // Cleanup
      await parser.destroy();
      
      const result = { text: textResult.text, numpages: textResult.total };
      
      let text = result.text || '';
      text = text.replace(/\s\s+/g, ' ').trim();

      if (!text) {
        throw new BadRequestException('Could not extract text from PDF');
      }

      return {
        data: {
          text,
          preview: text.slice(0, 500),
          pageCount: result.numpages,
          fileName: file.originalname,
          uploadedBy: userId,
        },
      };
    } catch (error) {
      this.logger.error(`PDF Parse Error Details:`, error);
      if (error instanceof BadRequestException) throw error;
      throw new BadRequestException(`Failed to process PDF: ${error.message}`);
    }
  }
}