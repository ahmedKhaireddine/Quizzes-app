import { model, Schema } from "mongoose";

export default model(
  "Topic",
  new Schema({
    "is_active": { type: Boolean, default: false },
    "order": { type: Number, required: true },
    "title": { type: String, required: true }
  })
);