import Player from "../models/players.js";

export const create = async (req, res) => {
    try {
        const player = await Player.create(req.body)
        console.log(player);
        if (player) {
            return res.status(200).json(
                {
                    message: "player created !!!",
                    player: player,
                })
        }
    }
    catch (error)
    {
        return res.status(500).json(
            {
                message:"error in creating the player",
                error:error
            })
    }
}