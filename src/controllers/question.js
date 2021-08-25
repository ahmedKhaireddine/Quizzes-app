import Question from "../database/models/Question";

const findAll = async (topic) => {
  try {
    const conditions = { is_active: true };

    if (topic) conditions.topic = topic._id;

    const questions = await Question
      .find(conditions)
      .populate("topic", "_id title")
      .lean()
      .exec();

    return questions
  } catch(err) {
    throw new Error(err);
  }
}

export default { findAll }