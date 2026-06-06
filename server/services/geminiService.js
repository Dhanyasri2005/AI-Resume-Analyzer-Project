import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const analyzeResumeAI = async (
  resumeText,
  jobDescription = ""
) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Analyze the resume against the job description.

Return ONLY in this exact format:

MATCH_SCORE: <number>

MISSING_SKILLS:
- skill1
- skill2
- skill3

SUGGESTIONS:
- suggestion1
- suggestion2
- suggestion3

INTERVIEW_QUESTIONS:
- question1
- question2
- question3

Resume:
${resumeText}

Job Description:
${jobDescription}
`;

    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    throw new Error(
      error.message || "Failed to analyze resume"
    );
  }
};