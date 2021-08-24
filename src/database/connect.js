import { connect } from "mongoose";
import config from "../config";

export default async () => {
  const { mongodb_uri } = config;

  try {
    await connect(
      mongodb_uri,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("🚀  Database connected");
  } catch (error) {
    console.log(error);
  }
}