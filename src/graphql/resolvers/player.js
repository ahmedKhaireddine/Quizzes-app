import controllers from "../../controllers/player"

export default {
  Mutation: {
    createNewPlayer: (parent, {questionId, email, full_name}) => controllers.createNewPlayer(questionId, email, full_name)
  }
}