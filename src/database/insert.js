import databaseConnect from "./connect";
import topics from "../data/topics.json";
import Topic from "./models/Topic";

(async () => {
  try {
    // Database connection
    await databaseConnect();

    // Insertion of topics
    await Topic.deleteMany();

    const topicsInsered = await Topic.insertMany(topics);
  } catch (error) {
    console.log(error);
  }
})();