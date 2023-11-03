import { Schema, model } from "mongoose";

const schema = new Schema(
    {
      user: {
        type: String,
        required: true,
      }
    },
    {
      timestamps: true,
    }
  );

  export default model("User", schema);