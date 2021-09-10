import dotenv from "dotenv";

dotenv.config();

const { MONGODB_URI, PORT, SECRET_KEY } = process.env;

export default {
  "mongodb_uri": MONGODB_URI || "mongodb://localhost:27017/lebonplan",
  "port": PORT || 4000,
  "secret_key": SECRET_KEY
}