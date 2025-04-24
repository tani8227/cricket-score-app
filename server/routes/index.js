 import express from 'express'
const routes = express.Router();
import playerRoutes from './players.js';
import teamRoutes from './team.js';
import matchRoutes from './match.js';
import deliveryRoutes from './delivery.js';


routes.use("/api/players", playerRoutes);
routes.use("/api/teams", teamRoutes);
routes.use("/api/matches", matchRoutes);
routes.use("/api/deliveries", deliveryRoutes);

export default routes;