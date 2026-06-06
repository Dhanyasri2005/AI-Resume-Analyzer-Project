import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-project-cyan.vercel.app"
});

export default API;
