import controllers from "../../controllers/quiz";

export default {
  Query: {
    quiz: (parent, { code }) => controllers.findByCode(code)
  }
}