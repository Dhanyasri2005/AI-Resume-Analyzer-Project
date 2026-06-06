import mongoose from "mongoose";

const analysisSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },

      matchScore: Number,

      missingSkills: [String],

      suggestions: [String],

      interviewQuestions: [String]
    },
    {
      timestamps: true
    }
  );

export default mongoose.model(
  "Analysis",
  analysisSchema
);