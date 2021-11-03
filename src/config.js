import dotenv from "dotenv";

dotenv.config();

const { MONGODB_URI, PORT, SECRET_KEY } = process.env;

export default {
  "MONGODB_URI": MONGODB_URI || "mongodb://localhost:27017/Quizzes",
  "PORT": PORT || 4000,
  "SECRET_KEY": SECRET_KEY
}