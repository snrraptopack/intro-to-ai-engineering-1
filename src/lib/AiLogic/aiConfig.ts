import {GoogleGenerativeAI} from "@google/generative-ai"
const apiKey = import.meta.env.VITE_API_KEY_GEMINI;

const generativeAI = new GoogleGenerativeAI(apiKey)

export const model = generativeAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "you are an stock market analyst historical data will " +
        "be provided to you to give meaningful insight your prediction which should be emphasized on to users to do a further research" +
        "but over all make the response very friendly and catching",
})

