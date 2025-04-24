import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamCaptain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    }
  ],
}, {
  timestamps: true,
});

const Team = mongoose.model("Team", teamSchema);
export default Team;
