import controllers from "../../controllers/player"

export default {
  Mutation: {
    createNewPlayer: (parent, {questionId, email, full_name}) => controllers.createNewPlayer(questionId, email, full_name),
    updateAnswersAndScoreById: (parent, {_id, answers, score}) => controllers.updateAnswersAndScore(_id, answers, score)
  }
}