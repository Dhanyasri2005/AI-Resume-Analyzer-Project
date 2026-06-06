import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import analysisRoutes from "./routes/analysisRoutes.js";

dotenv.config();

// connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/analysis", analysisRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Running on ${process.env.PORT || 5000}`);
});
