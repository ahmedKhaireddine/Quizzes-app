import bcrypt from "bcryptjs";
import databaseConnect from "./connect";
import questions from "../data/questions.json";
import topics from "../data/topics.json";
import users from "../data/users.json";
import Question from "./models/Question";
import Topic from "./models/Topic";
import User from "./models/User";

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

    // Insertion of Users
    await User.deleteMany();

    const usersToInsert = users.map( user => {
      user.password = bcrypt.hashSync(user.password, 12);

      return user;
    });

    const usersInsered = await User.insertMany(usersToInsert);
  } catch (error) {
    console.log(error);
  }
})();