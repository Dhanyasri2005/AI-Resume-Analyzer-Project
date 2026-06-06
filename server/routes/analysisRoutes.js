import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";

import {
  analyzeResumeAI
} from "../services/geminiService.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage()
});

router.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {
    try {

      if (!req.file) {
        return res.status(400).json({
          message: "Resume not uploaded"
        });
      }

      const pdfBuffer = req.file.buffer;

      const parsed = await pdfParse(
        pdfBuffer
      );

      const resumeText = parsed.text;

      const jobDescription =
        req.body.jobDescription || "";

      const aiResult =
        await analyzeResumeAI(
          resumeText,
          jobDescription
        );

      console.log("AI RESULT:");
      console.log(aiResult);

      const matchScore =
        aiResult.match(
          /MATCH_SCORE:\s*(\d+)/i
        )?.[1] || "0";

      const missingSkills =
        aiResult
          .match(
            /MISSING_SKILLS:([\s\S]*?)SUGGESTIONS:/i
          )?.[1]
          ?.split("\n")
          .map(item =>
            item.replace("-", "").trim()
          )
          .filter(Boolean) || [];

      const suggestions =
        aiResult
          .match(
            /SUGGESTIONS:([\s\S]*?)INTERVIEW_QUESTIONS:/i
          )?.[1]
          ?.split("\n")
          .map(item =>
            item.replace("-", "").trim()
          )
          .filter(Boolean) || [];

      const interviewQuestions =
        aiResult
          .match(
            /INTERVIEW_QUESTIONS:([\s\S]*)/i
          )?.[1]
          ?.split("\n")
          .map(item =>
            item.replace("-", "").trim()
          )
          .filter(Boolean) || [];

      return res.json({
        matchScore,
        missingSkills,
        suggestions,
        interviewQuestions
      });

    } catch (error) {

      console.log("ERROR:");
      console.log(error);

      return res.status(500).json({
        message: error.message
      });

    }
  }
);

export default router;