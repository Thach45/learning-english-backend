import * as cheerio from 'cheerio';
import { CambridgeEnglishResult, CambridgeEnglishPronunciation, CambridgeEnglishEntry, CambridgeEnglishMeaning } from './vocabulary.types';
import { PartOfSpeech, VocabularyResponseDto } from './vocabulary.dto';

// Simple in-memory cache
const cache: Record<string, any> = {};

interface CambridgeEntry {
    part_of_speech: string;
    pronunciation: string;
    meanings: {
        english_def: string;
        vietnamese_trans: string;
        examples: string[];
    }[];
}

interface CambridgeResult {
    status: 'success' | 'error';
    message?: string;
    word: string;
    entries: CambridgeEntry[];
}

export async function crawlCambridgeDictionary(word: string): Promise<CambridgeResult> {
    // Normalize word
    word = word.trim().toLowerCase();
    if (!word) {
        return {
            status: 'error',
            message: 'Word is required',
            word: '',
            entries: []
        };
    }

    // Check cache first
    if (cache[word]) {
        console.log(`Found '${word}' in cache. Returning immediately.`);
        return cache[word];
    }

    try {
        const url = `https://dictionary.cambridge.org/vi/dictionary/english-vietnamese/${word}`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        const final_data: CambridgeResult = {
            status: 'success',
            word: word,
            entries: []
        };

        // Find all entry blocks
        const entry_blocks = $('.di-body');
        if (entry_blocks.length === 0) {
            return {
                status: 'error',
                message: 'Word not found or page structure changed.',
                word: word,
                entries: []
            };
        }

        entry_blocks.each((_, block) => {
            const $block = $(block);
            const parent_head = $block.prev('.di-head');
            const pos_tag = parent_head.find('.pos');
            const part_of_speech = pos_tag.text().trim() || 'N/A';
            const ipa_tag = parent_head.find('.ipa');
            const pronunciation = ipa_tag.text().trim() || 'N/A';

            const entry_data: CambridgeEntry = {
                part_of_speech,
                pronunciation,
                meanings: []
            };

            const sense_blocks = $block.find('.sense-block');
            sense_blocks.each((_, sense) => {
                const $sense = $(sense);
                const def_en_tag = $sense.find('.def');
                const def_en = def_en_tag.text().trim().replace(/\n/g, ' ') || 'N/A';
                const def_vi_tag = $sense.find('.trans');
                const def_vi = def_vi_tag.text().trim() || 'N/A';
                const examples = $sense.find('.eg').map((_, ex) => $(ex).text().trim()).get();

                if (def_en !== 'N/A' || def_vi !== 'N/A') {
                    entry_data.meanings.push({
                        english_def: def_en,
                        vietnamese_trans: def_vi,
                        examples
                    });
                }
            });

            if (entry_data.meanings.length > 0) {
                final_data.entries.push(entry_data);
            }
        });

        // Cache the result if successful
        if (final_data.status === 'success') {
            console.log(`Successfully crawled '${word}'. Saving to cache.`);
            cache[word] = final_data;
        }

        return final_data;

    } catch (error) {
        console.error('Error fetching dictionary data:', error);
        return {
            status: 'error',
            message: `Failed to fetch data: ${error.message}`,
            word: word,
            entries: []
        };
    }
}

export async function crawlCambridgeEnglishDictionary(word: string): Promise<CambridgeEnglishResult> {
    // Normalize word
    word = word.trim().toLowerCase();
    if (!word) {
        return {
            status: 'error',
            message: 'Word is required',
            word: '',
            entries: []
        };
    }

    // Check cache first
    const cacheKey = `en_${word}`;
    if (cache[cacheKey]) {
        console.log(`Found '${word}' in English dictionary cache. Returning immediately.`);
        return cache[cacheKey];
    }

    try {
        const url = `https://dictionary.cambridge.org/dictionary/english/${word}`;
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        const final_data: CambridgeEnglishResult = {
            status: 'success',
            word: word,
            entries: []
        };

        // Find all entry blocks
        const entry_blocks = $('.pr.entry-body__el');
        if (entry_blocks.length === 0) {
            return {
                status: 'error',
                message: 'Word not found or page structure changed.',
                word: word,
                entries: []
            };
        }

        entry_blocks.each((_, block) => {
            const $block = $(block);
            
            // Get header info (part of speech and pronunciations)
            const pos_header = $block.find('.pos-header');
            const pos_tag = pos_header.find('.pos');
            const part_of_speech = pos_tag.text().trim() || 'N/A';

            // Get pronunciations
            const pronunciations: CambridgeEnglishPronunciation[] = [];
            pos_header.find('.dpron-i').each((_, pron_block) => {
                const $pron = $(pron_block);
                const region_tag = $pron.find('.region');
                const ipa_tag = $pron.find('.ipa');
                const audio_source = $pron.find('source');

                pronunciations.push({
                    region: region_tag.text().trim() || 'N/A',
                    ipa: ipa_tag.text().trim() || 'N/A',
                    audio_url: audio_source.attr('src') 
                        ? `https://dictionary.cambridge.org${audio_source.attr('src')}`
                        : 'N/A'
                });
            });

            const entry_data: CambridgeEnglishEntry = {
                part_of_speech,
                pronunciations,
                meanings: []
            };

            // Get definitions and CEFR levels
            const sense_blocks = $block.find('.pr.dsense');
            sense_blocks.each((_, sense) => {
                const $sense = $(sense);
                
                // Get CEFR level
                const cefr_tag = $sense.find('.epp-xref');
                const cefr_level = cefr_tag.text().trim() || 'N/A';

                const def_block = $sense.find('.def-block');
                if (!def_block.length) return;

                const def_en_tag = def_block.find('.def');
                const def_en = def_en_tag.text().trim().replace(/\n/g, ' ') || 'N/A';

                // Get examples
                const examples = def_block.find('.eg')
                    .map((_, ex) => $(ex).text().trim())
                    .get();

                if (def_en !== 'N/A') {
                    const meaning: CambridgeEnglishMeaning = {
                        cefr_level,
                        english_def: def_en,
                        examples
                    };
                    entry_data.meanings.push(meaning);
                }
            });

            if (entry_data.meanings.length > 0) {
                final_data.entries.push(entry_data);
            }
        });

        // Cache the result if successful
        if (final_data.status === 'success') {
            console.log(`Successfully crawled '${word}' from English dictionary. Saving to cache.`);
            cache[cacheKey] = final_data;
        }

        return final_data;

    } catch (error) {
        console.error('Error fetching English dictionary data:', error);
        return {
            status: 'error',
            message: `Failed to fetch data: ${error.message}`,
            word: word,
            entries: []
        };
    }
}

export const mapCambridgePos = (pos: string): PartOfSpeech | null => {
    const posMap: Record<string, PartOfSpeech> = {
        'noun': PartOfSpeech.NOUN,
        'verb': PartOfSpeech.VERB,
        'adjective': PartOfSpeech.ADJECTIVE,
        'adverb': PartOfSpeech.ADVERB,
        'pronoun': PartOfSpeech.PRONOUN,
        'preposition': PartOfSpeech.PREPOSITION,
        'conjunction': PartOfSpeech.CONJUNCTION,
        'interjection': PartOfSpeech.INTERJECTION,
        'determiner': PartOfSpeech.DETERMINER
    };

    const normalizedPos = pos.toLowerCase().trim();
    return posMap[normalizedPos] || PartOfSpeech.OTHER;
};

export const mapToVocabularyDto = (data: any): VocabularyResponseDto => {
    return new VocabularyResponseDto({
        word: data.word,
        pronunciation: data.pronunciation || undefined,
        meaning: data.meaning,
        definition: data.definition || undefined,
        example: data.example || undefined,
        audioUrl: data.audioUrl || undefined,
        cefrLevel: data.cefrLevel || undefined,
        partOfSpeech: data.partOfSpeech,
        alternativePartOfSpeech: data.alternativePartOfSpeech || []
    });
};

export const processVocabularyData = (
    entry: any, 
    pos: PartOfSpeech, 
    allPartOfSpeech: PartOfSpeech[], 
    englishData: any
) => {
    let pronunciation = entry.pronunciation || '';
    let audioUrl = '';
    let cefrLevel = '';

    if (englishData.status === 'success') {
        const englishEntry = englishData.entries.find(
            (e: any) => mapCambridgePos(e.part_of_speech) === pos
        );
        const ukPronunciation = englishEntry?.pronunciations?.find((p: any) => p.region === 'uk');
        if (ukPronunciation) {
            pronunciation = ukPronunciation.ipa;
            audioUrl = ukPronunciation.audio_url;
        }
        cefrLevel = englishEntry?.meanings[0]?.cefr_level || '';
    }

    const meaning = entry.meanings
        .slice(0, 3)
        .map((m: any) => m.vietnamese_trans)
        .filter(Boolean)
        .join('; ') || '';

    const definition = entry.meanings[0]?.english_def || '';
    const example = entry.meanings[0]?.examples[0] || '';

    return {
        pronunciation,
        audioUrl,
        meaning,
        definition,
        example,
        cefrLevel,
        alternativePartOfSpeech: allPartOfSpeech
    };
};
