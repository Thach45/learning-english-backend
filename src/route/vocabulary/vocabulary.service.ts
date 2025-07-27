import { Injectable } from '@nestjs/common';
import { PartOfSpeech } from './vocabulary.dto';

import { translate } from 'google-translate-api-x';

@Injectable()
export class VocabularyService {
    async getVocabulary(word: string, requestedPartOfSpeech?: PartOfSpeech) {
        try {
            // 1. Gọi dictionary API
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            const entry = data[0];

            // 2. Xử lý dữ liệu từ dictionary API
            const pronunciation = entry.phonetics?.find(p => p.text)?.text || '';
            const audioUrl = entry.phonetics?.find(p => p.audio)?.audio || '';

            // 3. Xác định các loại từ
            const allPartOfSpeech = (entry.meanings || [])
                .map(m => m.partOfSpeech?.toUpperCase())
                .filter(pos => pos && Object.values(PartOfSpeech).includes(pos as PartOfSpeech))
                .map(pos => pos as PartOfSpeech);

            // 4. Xác định loại từ chính
            const partOfSpeech = requestedPartOfSpeech && allPartOfSpeech.includes(requestedPartOfSpeech)
                ? requestedPartOfSpeech
                : (allPartOfSpeech[0] || PartOfSpeech.OTHER);

            // 5. Lấy definition từ loại từ chính
            const mainMeaning = entry.meanings?.find(m => 
                m.partOfSpeech?.toUpperCase() === partOfSpeech
            );
            const definitions = mainMeaning?.definitions || [];
            const definition = definitions
                .slice(0, 3)
                .map(d => d.definition?.replace(/\.$/, ''))
                .filter(Boolean)
                .join(', ');

            // 6. Dịch từ
            const translation = await translate(word, { from: 'en', to: 'vi' });
            const meaning = translation.text;

            // 7. Trả về kết quả
            return {
                word: entry.word,
                pronunciation,
                audioUrl,
                meaning,
                definition,
                partOfSpeech,
                alternativePartOfSpeech: allPartOfSpeech,
                meanings: entry.meanings
            };
        } catch (error) {
            console.error('Error in getVocabulary:', error);
            throw error;
        }
    }
    async searchVocabulary(word: string) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        return data;
    }
}
