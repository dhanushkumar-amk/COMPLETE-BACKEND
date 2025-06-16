import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// Initialize with your actual API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function runGemini() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent("Explain photosynthesis in simple terms.");
    const response = await result.response;
    const text = await response.text();

    console.log("Gemini Output:\n", text);
  } catch (error) {
    console.error("Gemini API Error:", error.message || error);
  }
}

runGemini();
