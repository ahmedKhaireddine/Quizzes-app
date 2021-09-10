import Quiz from "../database/models/Quiz";

const findByCode = async (code) => {
  try {
    const conditions = { code };

    return await Quiz
      .findOne(conditions, "code is_active questions user createdAt updatedAt")
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