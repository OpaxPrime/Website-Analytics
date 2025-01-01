export const calculateScore = (metrics, weights) => {
  const totalWeight = Object.values(weights).reduce((sum, weight) => sum + weight, 0);
  
  return Object.entries(metrics).reduce((score, [key, value]) => {
    return score + (value * (weights[key] || 1));
  }, 0) / totalWeight;
};

export const generateSuggestions = (metrics, thresholds) => {
  const suggestions = [];
  
  Object.entries(metrics).forEach(([metric, value]) => {
    if (value < thresholds[metric]) {
      suggestions.push(thresholds[metric].suggestion);
    }
  });
  
  return suggestions;
};