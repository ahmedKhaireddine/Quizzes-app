import { model, Schema } from "mongoose";

export default model(
  "User",
  new Schema({
    "email": { type: String, required: true, unique: [true, "email must be unique"]},
    "first_name": { type: String, required: true },
    "last_name": { type: String, required: true },
    "password": { type: String, required: true },
    "role": { type: String, enum: ['user','admin'], default: 'user' }
  }, { timestamps: true })
);