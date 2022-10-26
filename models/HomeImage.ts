import mongoose from "mongoose";

const HomeImageSchema = new mongoose.Schema({
  file: {
    type: String,
    required: [true, "Url required"],
  },
});

export default mongoose.models.HomeImage ||
  mongoose.model("HomeImage", HomeImageSchema);
