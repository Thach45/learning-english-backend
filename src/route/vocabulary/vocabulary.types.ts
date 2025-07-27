// Vietnamese dictionary types
export interface CambridgeExample {
    text: string;
    translation: string;
}

export interface CambridgeDefinition {
    pos: string;
    text: string;
    translation: string;
    examples: CambridgeExample[];
}

export interface CambridgePronunciation {
    pos: string;
    region: string;
    ipa: string;
    audioUrl: string;
}

export interface CambridgeResult {
    status: 'success' | 'error';
    message?: string;
    word: string;
    entries: CambridgeEntry[];
}

export interface CambridgeEntry {
    part_of_speech: string;
    pronunciation?: string;
    meanings: {
        english_def: string;
        vietnamese_trans?: string;
        examples: string[];
    }[];
}

// English dictionary types
export interface CambridgeEnglishPronunciation {
    region: string;
    ipa: string;
    audio_url: string;
}

export interface CambridgeEnglishMeaning {
    cefr_level: string;
    english_def: string;
    examples: string[];
}

export interface CambridgeEnglishEntry {
    part_of_speech: string;
    pronunciations: CambridgeEnglishPronunciation[];
    meanings: CambridgeEnglishMeaning[];
}

export interface CambridgeEnglishResult {
    status: 'success' | 'error';
    message?: string;
    word: string;
    entries: CambridgeEnglishEntry[];
} 