import cheerio from 'cheerio';

export const analyzeAccessibility = async (html) => {
  const $ = cheerio.load(html);
  
  const imgWithoutAlt = $('img:not([alt])').length;
  const headingOrder = checkHeadingOrder($);
  const ariaLabels = $('[aria-label]').length;
  const formLabels = $('label').length;
  
  const score = calculateAccessibilityScore({
    imgWithoutAlt,
    headingOrder,
    ariaLabels,
    formLabels
  });
  
  const suggestions = generateAccessibilitySuggestions({
    imgWithoutAlt,
    headingOrder,
    ariaLabels,
    formLabels
  });
  
  return { score, suggestions };
};

function checkHeadingOrder($) {
  let isValid = true;
  let prevLevel = 0;
  
  $('h1, h2, h3, h4, h5, h6').each((_, elem) => {
    const level = parseInt(elem.tagName[1]);
    if (prevLevel !== 0 && level - prevLevel > 1) {
      isValid = false;
    }
    prevLevel = level;
  });
  
  return isValid;
}

function calculateAccessibilityScore(metrics) {
  let score = 100;
  
  if (metrics.imgWithoutAlt > 0) score -= 15;
  if (!metrics.headingOrder) score -= 20;
  if (metrics.ariaLabels < 5) score -= 10;
  if (metrics.formLabels < 3) score -= 10;
  
  return Math.max(score, 0);
}

function generateAccessibilitySuggestions(metrics) {
  const suggestions = [];
  
  if (metrics.imgWithoutAlt > 0) {
    suggestions.push('Add alt text to all images');
  }
  if (!metrics.headingOrder) {
    suggestions.push('Fix heading hierarchy (h1 -> h2 -> h3)');
  }
  if (metrics.ariaLabels < 5) {
    suggestions.push('Add more ARIA labels for better screen reader support');
  }
  if (metrics.formLabels < 3) {
    suggestions.push('Ensure all form inputs have associated labels');
  }
  
  return suggestions;
}