import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
 
}, { timestamps: true });

export default mongoose.model('Player', playerSchema);
