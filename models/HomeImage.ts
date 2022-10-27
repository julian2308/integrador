import mongoose from "mongoose";

const HomeImageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "Url required"],
  },
});

export default mongoose.models.HomeImage ||
  mongoose.model("HomeImage", HomeImageSchema);
