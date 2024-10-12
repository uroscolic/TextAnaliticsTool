export interface LanguageDetectionResponse {
    lang: string;
    confidence: number;
}

export interface Entity{
  abstract: string;
  categories: string[];
  image: string;
}