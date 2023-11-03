import { Schema, model } from "mongoose";

const schema = new Schema(
    {      
      message: {
        type: String,
        required: true,
      },
      user: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  export default model("Chat", schema);