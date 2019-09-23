import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

import conn from "../../config/dbConnection";

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const ToolSchema = new mongoose.Schema({
  disc: {
    type: String,
    required: true
  },
  prof: {
    type: String,
    required: true
  },
  depar: {
    type: String,
    required: true
  },
  cod: {
    type: Number,
    required: true
  },
  tags: [String]
},
  {
    versionKey: false
  });

ToolSchema.plugin(autoIncrement.plugin, {
  model: "Tool",
  fiel: "id",
  startAt: 1,
  incrementBy: 1
});

export default mongoose.model("Tool", ToolSchema);
