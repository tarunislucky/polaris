// POST localhost:3000/api/demo/blocking
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST() {
  const response = await generateText({
    model: google(process.env.NEXT_PUBLIC_GOOGLE_AI_MODEL!),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });

  return Response.json({ response });
};
