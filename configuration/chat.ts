import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. I am here to assist you with any preliminary questions you may have about buying or renting a home in Cary, North Carolina 🏡✨.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `I need a break from generating messages...⏳`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
