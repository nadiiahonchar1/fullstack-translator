import { model } from '../models/chatModels.js';
import { translationPrompt } from '../prompts/translationPrompt.js';

const translatedText = async (fromLanguage, toLanguage, text) => {
  const promptValue = await translationPrompt.invoke({
    fromLanguage,
    toLanguage,
    text,
  });
  const response = await model.invoke(promptValue);
  return response.content;
};

export default translatedText;
