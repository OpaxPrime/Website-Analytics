import * as cheerio from 'cheerio';

export const analyzeContent = async (html) => {
  const $ = cheerio.load(html);
  
  const wordCount = $('body').text().trim().split(/\s+/).length;
  const headings = $('h1, h2, h3').length;
  const images = $('img').length;
  const links = $('a').length;
  
  const metrics = {
    contentLength: Math.min(wordCount / 1000, 1),
    headingStructure: Math.min(headings / 10, 1),
    mediaRichness: Math.min(images / 5, 1),
    interactivity: Math.min(links / 20, 1)
  };
  
  const score = Math.round(
    (metrics.contentLength + metrics.headingStructure + 
     metrics.mediaRichness + metrics.interactivity) * 25
  );
  
  const suggestions = [];
  if (metrics.contentLength < 0.6) {
    suggestions.push('Add more detailed content to improve depth');
  }
  if (metrics.headingStructure < 0.5) {
    suggestions.push('Improve content structure with more headings');
  }
  if (metrics.mediaRichness < 0.4) {
    suggestions.push('Include more images and media');
  }
  
  return { score, suggestions };
};