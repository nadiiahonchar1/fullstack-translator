import { model } from '../models/chatModels.js';
import { translationPrompt } from '../prompts/translationPrompt.js';

const translatedText = async (language, text) => {
  const promptValue = await translationPrompt.invoke({ language, text });
  const response = await model.invoke(promptValue);
  return response.content;
};

export default translatedText;
