import express from 'express';
import cors from 'cors';
import { analyzeWebsite } from './analyzers/index.js';
import { isValidUrl } from './utils/urlHelper.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/analyze', async (req, res) => {
  const { url } = req.body;
  
  if (!url || !isValidUrl(url)) {
    return res.status(400).json({ error: 'Invalid URL provided' });
  }
  
  try {
    const results = await analyzeWebsite(url);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Analysis server running on port ${port}`);
});