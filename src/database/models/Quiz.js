import { model, Schema } from "mongoose";

export default model(
  "Quiz",
  new Schema({
    "code": { type: String, required: true },
    "is_active": { type: Boolean, default: false },
    "players": [{
      type: Schema.Types.ObjectId, ref: 'Player'
    }],
    "questions": [{
      type: Schema.Types.ObjectId, ref: 'Question'
    }],
    "user": { type: Schema.Types.ObjectId, ref: 'User' }
  }, { timestamps: true })
);