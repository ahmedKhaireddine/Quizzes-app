import controllers from "../../controllers/auth";

export default {
  Mutation: {
    signin: (parent, { registerInput }) => controllers.signin(registerInput),
    signup: (parent, { email, password }) => controllers.signup(email, password)
  }
}
