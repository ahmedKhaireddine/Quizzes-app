import { model, Schema } from "mongoose";

export default model(
  "Player",
  new Schema(
    {
      "answers": [{
        "choice_id": { type: Number, required: true },
        "question_id": { type: Schema.Types.ObjectId, ref: 'Question' }
      }],
      "email": { type: String, required: true },
      "score": { type: String, default: 0 },
      "full_name": { type: String, required: true }
    },
    { timestamps: true }
  )
);