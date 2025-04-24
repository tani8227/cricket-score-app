import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
  overNumber: Number,
  ballNumber: Number,
  batsman: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  bowler: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  runs: Number,
  extras: {
    type: { type: String, enum: ['wide', 'noball', 'bye', 'legbye', 'overthrow', 'none'], default: 'none' },
    runs: { type: Number, default: 0 },
  },
  isWicket: { type: Boolean, default: false },
  description: String
}, { timestamps: true });

export default mongoose.model('Delivery', deliverySchema);
