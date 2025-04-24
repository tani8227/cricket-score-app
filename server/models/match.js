import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
  overs: { type: Number, required: true },

  innings: [{
    battingTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    bowlingTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    deliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' }],

    totalRuns: { type: Number, default: 0 },
    totalWickets: { type: Number, default: 0 },

    extras: {
      wide: { type: Number, default: 0 },
      noBall: { type: Number, default: 0 },
      bye: { type: Number, default: 0 },
      legBye: { type: Number, default: 0 },
      overthrow: { type: Number, default: 0 },
    },

    batters: [{
      player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
      runs: { type: Number, default: 0 },
      ballsFaced: { type: Number, default: 0 },
      fours: { type: Number, default: 0 },
      sixes: { type: Number, default: 0 },
      out: { type: Boolean, default: false }
    }],

    bowlers: [{
      player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
      overs: { type: Number, default: 0 },
      ballsBowled: { type: Number, default: 0 },
      runsConceded: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      maidens: { type: Number, default: 0 }
    }],
  }],

  currentInning: { type: Number, default: 0 },
  currentOver: { type: Number, default: 0 },
  currentBallInOver: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false }

}, { timestamps: true });

export default mongoose.model('Match', matchSchema);
