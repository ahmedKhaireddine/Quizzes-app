import Player from "../../database/models/Player";
import Quiz from "../../database/models/Quiz";

export default {
  Mutation: {
    createNewPlayer: async (parent, {questionId, email, full_name}) => {
      try {
        const playerToInserd = new Player({
          email,
          full_name
        });

        const playerInserd = await playerToInserd.save();

        const quizFound = await Quiz.findById(questionId).exec();

        quizFound.players.push(playerInserd);

        await quizFound.save();

        return {
          ...playerInserd._doc
        }
      } catch(err) {
        throw new Error(err)
      }
    }
  }
}