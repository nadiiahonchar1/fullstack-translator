import { ChatPromptTemplate } from '@langchain/core/prompts';

const systemTemplate =
  'Translate the following text from {fromLanguage} to {toLanguage}:';

export const translationPrompt = ChatPromptTemplate.fromMessages([
  ['system', systemTemplate],
  ['user', '{text}'],
]);
