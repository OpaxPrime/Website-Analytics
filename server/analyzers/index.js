import { analyzeContent } from './contentAnalyzer.js';
import { analyzeAccessibility } from './accessibilityAnalyzer.js';
import { analyzePerformance } from './performanceAnalyzer.js';
import { normalizeUrl } from '../utils/urlHelper.js';
import axios from 'axios';

export const analyzeWebsite = async (url) => {
  const normalizedUrl = normalizeUrl(url);
  
  try {
    const { data: html } = await axios.get(normalizedUrl);
    
    const [
      contentResults,
      accessibilityResults,
      performanceResults
    ] = await Promise.all([
      analyzeContent(html),
      analyzeAccessibility(html),
      analyzePerformance(normalizedUrl)
    ]);
    
    // Simulate other metrics for demo
    return {
      engagement: {
        score: contentResults.score,
        suggestions: contentResults.suggestions
      },
      accessibility: {
        score: accessibilityResults.score,
        suggestions: accessibilityResults.suggestions
      },
      visualDesign: {
        score: 85,
        suggestions: [
          'Improve color contrast ratios',
          'Enhance visual hierarchy',
          'Optimize spacing and layout'
        ]
      },
      contentDepth: {
        score: contentResults.score,
        suggestions: contentResults.suggestions
      },
      innovation: {
        score: 80,
        suggestions: [
          'Consider implementing AI-powered features',
          'Add interactive elements',
          'Integrate modern web capabilities'
        ]
      },
      performance: {
        score: performanceResults.score,
        suggestions: performanceResults.suggestions
      },
      scalability: {
        score: 90,
        suggestions: [
          'Implement caching strategies',
          'Consider microservices architecture',
          'Optimize database queries'
        ]
      }
    };
  } catch (error) {
    throw new Error(`Failed to analyze website: ${error.message}`);
  }
};