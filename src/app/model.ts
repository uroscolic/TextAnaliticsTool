export interface LanguageDetectionResponse {
    lang: string;
    confidence: number;
}

export interface Entity {
  abstract: string;
  categories: string[];
  image: string;

}

export class History {
  timestamp: Date;
  method: string;
  path: string;
  parms : string[];

  constructor(timestamp: Date, method: string, path: string, parms : string[]) {
    this.timestamp = timestamp;
    this.method = method;
    this.path = path;
    this.parms = parms;
  }
}