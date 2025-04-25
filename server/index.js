import express from "express";
import dotenv from "dotenv";
const PORT = process.env.PORT || 5000;
import DB from './config/mongoose.js'
import routes from "./routes/index.js";
import cors from 'cors'
dotenv.config();
const app = express();
app.use(cors());
DB();

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () =>
  console.log(`Server running on port :${PORT}`)
);
