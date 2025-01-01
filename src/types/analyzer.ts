export interface AnalysisScore {
  score: number;
  suggestions: string[];
}

export interface AnalysisResult {
  engagement: AnalysisScore;
  accessibility: AnalysisScore;
  visualDesign: AnalysisScore;
  contentDepth: AnalysisScore;
  innovation: AnalysisScore;
  performance: AnalysisScore;
  scalability: AnalysisScore;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}