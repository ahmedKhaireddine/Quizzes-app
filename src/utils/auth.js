import jwt from "jsonwebtoken";
import config from "../config";

export const generateToken = ({ _id, email }) => {
  const { SECRET_KEY } = config;

  return jwt.sign({ _id, email }, SECRET_KEY, {
    expiresIn: '1h'
  });
}