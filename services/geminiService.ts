import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const streamChatResponse = async (
  history: { role: "user" | "model"; parts: { text: string }[] }[],
  userMessage: string
) => {
  const client = getClient();
  
  const chat = client.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
    history: history,
  });

  const result = await chat.sendMessageStream({ message: userMessage });
  return result;
};