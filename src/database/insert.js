import databaseConnect from "./connect";
import questions from "../data/questions.json";
import topics from "../data/topics.json";
import Question from "./models/Question";
import Topic from "./models/Topic";

(async () => {
  try {
    // Database connection
    await databaseConnect();

    // Insertion of topics
    await Topic.deleteMany();

    const topicsInsered = await Topic.insertMany(topics);

    // Insertion of questions
    await Question.deleteMany();

    const questionsToInsert = questions.map( question => {
      question.topic = topicsInsered.find( topic => topic.title === question.topic )._id;

      return question;
    });

    const questionsInsered = await Question.insertMany(questionsToInsert);
  } catch (error) {
    console.log(error);
  }
})();