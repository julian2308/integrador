import mongoose from "mongoose";

const HomeDataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title required"],
  },
  text: {
    type: String,
    required: [true, "Text required"],
  },
  box: {
    type: String,
    required: [true, "Box position required"],
  },
});

export default mongoose.models.HomeData ||
  mongoose.model("HomeData", HomeDataSchema);
