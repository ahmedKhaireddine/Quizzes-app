import bcrypt from "bcryptjs";
import { UserInputError } from "apollo-server-express";
import { generateToken } from "../utils/auth";
import validateSigninInput from "../validations/signin";
import validateSignupInput from "../validations/signup";
import User from "../database/models/User";

const signin = async ({ email, first_name, last_name, password, confirmPassword }) => {
  try {
    const { errors, valid } = validateSigninInput(email, first_name, last_name, password, confirmPassword);

    if (!valid) throw new UserInputError("Errors", { errors });

    const user = await User.findOne({ email });

    if (user) {
      errors.email = "This email is taken";
      throw new UserInputError("Email is taken", { errors });
    }

    const userToInserd = new User({
      email,
      first_name,
      last_name,
      password: bcrypt.hashSync(password, 12)
    });

    const userInserd = await userToInserd.save();

    return {
      ...userInserd._doc,
      token: generateToken(userInserd)
    }
  } catch(err) {
    throw new Error(err);
  }
}

const signup = async (email, password) => {
  try {
    const { errors, valid } = validateSignupInput(email, password);

    if (!valid) throw new UserInputError("Errors", { errors });

    const user = await User.findOne({ email });

    if (!user) {
      errors.message = "User not found";
      throw new UserInputError("User not found", { errors });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      errors.message = "Wrong crendetials";
      throw new UserInputError("Wrong crendetials", { errors });
    }

    return {
      ...user._doc,
      token: generateToken(user)
    }
  } catch(err) {
    throw new Error(err);
  }
}

export default { signin, signup }