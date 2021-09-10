import jwt from "jsonwebtoken";
import config from "../config";

export const generateToken = ({ _id, email }) => {
  return jwt.sign({ _id, email }, config.secret_key, {
    expiresIn: '1h'
  });
}