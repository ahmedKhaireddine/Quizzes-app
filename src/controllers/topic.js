import Topic from "../database/models/Topic";

const findAll = async () => {
  try {
    const conditions = { is_active: true };
    const options = { sort: { order: 1 }};

    return await Topic
      .find(conditions, {}, options)
      .lean()
      .exec();
  } catch(err) {
    console.log(err);
  }
}

export default { findAll }