import Player from "../database/models/Player";
import Quiz from "../database/models/Quiz";
import { validateAddInput, validateUpdateInput } from "../validations/player"

const createNewPlayer = async (questionId, email, full_name) => {
  try {
    const { errors, valid } = validateAddInput(email, full_name, questionId);

    if (!valid) return { errors, status: "FAILED" };

    const quizFound = await Quiz.findById(questionId).exec();

    if (!quizFound) return {
      errors: [{ key: "", message: "Quiz does not exist !!" }],
      status: "FAILED"
    }

    const playerAlreadyExists = await Player.findOne({ email });

    if (playerAlreadyExists) {
      quizFound.players.push(playerAlreadyExists);

      return {
        player: playerAlreadyExists,
        status: "SUCCESS"
      }
    } else {
      const playerToInserd = new Player({ email, full_name });

      const playerInserd = await playerToInserd.save();

      quizFound.players.push(playerInserd);

      await quizFound.save();

      return {
        player: playerInserd._doc,
        status: "SUCCESS"
      }
    }
  } catch(err) {
    throw new Error(err)
  }
}

const updateAnswersAndScore = async (_id, answers, score) => {
  try {
    const { errors, valid } = validateUpdateInput(_id, answers, score);

    if (!valid) return { errors, status: "FAILED" }

    const conditions = { _id };
    const fieldsToEdit = { answers, score };

    const playerEdit = await Player.findOneAndUpdate(
      conditions,
      { $set: fieldsToEdit },
      { new: true }
    );

    if (!playerEdit) return {
      errors: [{ key: "", message: "Player does not exist !!" }],
      status: "FAILED"
    }

    return  { status: "SUCCESS" }

  } catch(err) {
    throw new Error(err)
  }
}

export default { createNewPlayer, updateAnswersAndScore }