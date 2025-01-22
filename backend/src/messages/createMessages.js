import { HumanMessage, SystemMessage } from '@langchain/core/messages';

export const createMessages = (language, text) => [
  new SystemMessage(`Translate the following from English into ${language}`),
  new HumanMessage(text),
];
