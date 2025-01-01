import { URL } from 'url';

export const normalizeUrl = (url) => {
  if (!url.startsWith('http')) {
    url = `https://${url}`;
  }
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.href;
  } catch (error) {
    throw new Error('Invalid URL format');
  }
};

export const isValidUrl = (url) => {
  try {
    new URL(normalizeUrl(url));
    return true;
  } catch {
    return false;
  }
};