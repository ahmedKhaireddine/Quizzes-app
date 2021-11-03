import Quiz from "../database/models/Quiz";
import Player from "../database/models/Player";

const findByCode = async (code) => {
  try {
    const conditions = { code };
    const select = "code is_active questions players user createdAt updatedAt";

    return await Quiz
      .findOne(conditions, select)
      .populate("players", "_id email full_name score")
      .populate({
        path: "questions",
        select: "_id choices is_active title",
        populate: {
          path: "topic",
          select: "_id title"
        }
      })
      .populate("user", "_id first_name last_name")
      .lean()
      .exec();
  } catch(err) {
    throw new Error(err);
  }
}

export default { findByCode }