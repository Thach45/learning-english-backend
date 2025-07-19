import { Injectable } from '@nestjs/common';
import { translate } from 'google-translate-api-x';

@Injectable()
export class VocabularyService {
    async getVocabulary(word: string) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        const entry = data[0];

        // Pronunciation: lấy text đầu tiên nếu có
        const pronunciation = entry.phonetics?.find(p => p.text)?.text || '';

        // Audio: lấy audio đầu tiên có link
        const audioUrl = entry.phonetics?.find(p => p.audio)?.audio || '';

        // Tạo definition: mỗi partOfSpeech chỉ lấy tối đa 3 định nghĩa, nối bằng ', ', các partOfSpeech nối bằng '; '
        const definition = (entry.meanings || []).map(m => {
            const part = m.partOfSpeech || '';
            const defs = (m.definitions || [])
                .slice(0, 3)
                .map(d => {
                    let def = d.definition || '';
                    // Loại bỏ dấu chấm cuối nếu có
                    def = def.replace(/\.$/, '');
                    return def;
                })
                .filter(Boolean)
                .join(', ');
            return part && defs ? `${part}: ${defs}` : '';
        }).filter(Boolean).join('; ');

        // Meanings: giữ lại nếu cần cho frontend
        const meanings = (entry.meanings || []).map(m => ({
            partOfSpeech: m.partOfSpeech || '',
            definitions: (m.definitions || []).map(d => ({
                definition: (d.definition || '').replace(/\.$/, ''),
                example: d.example || ''
            }))
        }));

        // meaning, partOfSpeech ở ngoài trả về rỗng
        
        const partOfSpeech = '';
        const res = await translate(word, { from: 'en', to: 'vi' });
        const meaning = res.text;

        // Example: ví dụ đầu tiên nếu có (giữ lại logic cũ cho field example ngoài)
        let example = '';
        for (const meaningObj of entry.meanings || []) {
            for (const def of meaningObj.definitions || []) {
                if (def.example) {
                    example = def.example;
                    break;
                }
            }
            if (example) break;
        }

        return {
            word: entry.word,
            pronunciation,
            meaning,
            definition,
            example,
            audioUrl,
            partOfSpeech,
            meanings,
        };
    }
}
