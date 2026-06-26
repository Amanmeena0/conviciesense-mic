// shared/types.ts
export interface EngagementRecord {
  timestamp: number;
  score: number;
  sentiment: string;
  transcript: string;
  buying_signals: string[];
  hesitations: string[];
  detected_intents: string[];
  intent_confidence: number;
  recommendation: string;
  energy?: number;
  confidence?: number;
  speaker?: string;
}
