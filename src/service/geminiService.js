import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function genDesc(imgBuffer) {

  try {
    return await ((new GoogleGenerativeAI(process.env.GEMINI_API_KEY)).getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(["Generate a short description to the following image", {inlineData: {data: imgBuffer.toString("base64"), mimeType: "image/png"}}])).text() || "Alt-text não disponível.";

  } catch (error) {

    console.error("Error on getting img description:", error.message, error);
    throw new Error("Error on getting img description from");
  }
}