import express from "express";
import translatedText from './services/translationService.js';

const app = express();

app.get('/translate', async (req, res) => {
    const { language, text } = req.query;

   if (!language || !text) {
     return res
       .status(400)
       .json({ error: 'Missing required query parameters: language and text' });
   }
    try {
      const translation = await translatedText(language, text);
      res.json({ translation });
    } catch (error) {
        console.error('Error during translation:', error);
        res.status(500).json({ error: 'Failed to translate text' });
    }
});

app.listen(3001, ()=>console.log('Server running'));
