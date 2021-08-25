import controllers from "../../controllers/question";

export default {
  Query: {
    questions: (parent, { topic }) => controllers.findAll(topic)
  }
}