import { connect } from "mongoose";
import config from "../config";

export default async () => {
  const { MONGODB_URI } = config;

  try {
    await connect(
      MONGODB_URI,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log("🚀  Database connected");
  } catch (error) {
    console.log(error);
  }
}