import Player from "../database/models/Player";
import Quiz from "../database/models/Quiz";
import { validateAddInput, validateUpdateInput } from "../validations/player"

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