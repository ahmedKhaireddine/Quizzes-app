import { model, Schema } from "mongoose";

export default model(
  "Question",
  new Schema({
    "choices": [{
      "value": String,
      "weight": { type: Number, min: 0, max: 1 }
    }],
    "is_active": { type: Boolean, default: false },
    "title": { type: String, required: true },
    "topic": { type: Schema.Types.ObjectId, ref: "Topic" }
  }, { timestamps: true })
);