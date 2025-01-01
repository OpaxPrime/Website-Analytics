import axios from 'axios';
import { AnalysisResult } from '../types/analyzer';

export const analyzeUrl = async (url: string): Promise<AnalysisResult> => {
  try {
    const response = await axios.post('http://localhost:3001/analyze', { url });
    return response.data;
  } catch (error) {
    throw new Error('Failed to analyze URL');
  }
};