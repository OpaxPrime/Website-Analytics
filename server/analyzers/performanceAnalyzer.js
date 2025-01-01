import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

export const analyzePerformance = async (url) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    const metrics = await page.metrics();
    const performanceMetrics = {
      loadTime: metrics.TaskDuration,
      scriptDuration: metrics.ScriptDuration,
      layoutDuration: metrics.LayoutDuration
    };
    
    const score = calculatePerformanceScore(performanceMetrics);
    const suggestions = generatePerformanceSuggestions(performanceMetrics);
    
    return { score, suggestions };
  } finally {
    await browser.close();
  }
};

function calculatePerformanceScore(metrics) {
  const weights = {
    loadTime: 0.4,
    scriptDuration: 0.3,
    layoutDuration: 0.3
  };
  
  let score = 100;
  
  if (metrics.loadTime > 3000) score -= 20;
  if (metrics.scriptDuration > 1000) score -= 15;
  if (metrics.layoutDuration > 500) score -= 15;
  
  return Math.max(score, 0);
}

function generatePerformanceSuggestions(metrics) {
  const suggestions = [];
  
  if (metrics.loadTime > 3000) {
    suggestions.push('Optimize page load time through caching and compression');
  }
  if (metrics.scriptDuration > 1000) {
    suggestions.push('Reduce JavaScript execution time');
  }
  if (metrics.layoutDuration > 500) {
    suggestions.push('Minimize layout shifts and reflows');
  }
  
  return suggestions;
}