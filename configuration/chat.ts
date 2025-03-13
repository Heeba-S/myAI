import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. I'm here to help you find the best halal eats around UNC. So, what’s the vibe — on-campus or off-campus? We've got some tasty options like American, Nepali, Greek, Indian, Mediterranean, and Turkish. If you're on campus, tell me your dorm and I’ll point you to the closest halal spot. If you're off campus, I can use the Student Union as a reference for distances — most options are on Franklin Street or in the dining halls. I can also give you a quick overview of some menu items and prices from the restaurant you're interested in, plus their address and phone number if you need it. Just let me know what sounds good!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Looks like we're having a great conversation! Give me some time to digest our discussion and I'll be happy to get back to you soon!`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
