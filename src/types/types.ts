export interface AnalysisScore {
  score: number;
  suggestions: string[];
  detailedCritique: string;
}

export interface AnalysisResult {
  engagement: AnalysisScore;
  accessibility: AnalysisScore;
  performance: AnalysisScore;
}