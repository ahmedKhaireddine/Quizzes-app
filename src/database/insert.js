import bcrypt from "bcryptjs";
import databaseConnect from "./connect";
import questions from "../data/questions.json";
import quizzes from "../data/quizzes.json";
import topics from "../data/topics.json";
import users from "../data/users.json";
import Question from "./models/Question";
import Quiz from "./models/Quiz";
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

    // Insertion of quizzes
    await Quiz.deleteMany();

    const quizzesToInsert = quizzes.map( quiz => {
      quiz.code = Math.random().toString(36).slice(2).toUpperCase();
      quiz.questions = questionsInsered.slice(0, 10).map( question => question._id );
      quiz.user = usersInsered.find( user => user.role == "user" )._id;

      return quiz;
    });

    await Quiz.insertMany(quizzesToInsert);
  } catch (error) {
    console.log(error);
  }
})();