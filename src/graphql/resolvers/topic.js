import controllers from "../../controllers/topic";

export default {
  Query: {
    topics: () => controllers.findAll()
  }
}