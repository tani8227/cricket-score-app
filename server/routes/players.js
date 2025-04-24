 import express from 'express'
const playerRoutes = express.Router();
import * as playerController from '../controllers/player.js';


playerRoutes.post("/create",playerController.create );
// playerRoutes.get("/getAll", );
// playerRoutes.get("/get/:id", );


export default playerRoutes;