import Player from "../database/models/Player";
import Quiz from "../database/models/Quiz";
import { validateAddInput } from "../validations/player"

const createNewPlayer = async (questionId, email, full_name) => {
  try {
    const { errors, valid } = validateAddInput(email, full_name);

    if (!valid) throw new Error("Errors", errors);

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

export default { createNewPlayer }