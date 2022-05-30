import createGame from "../database/queries/create/games.js";
import { getAllGames, queryGames } from "../database/queries/retrieve/games.js";

const gamesController = async (req, res) => {
    try {
        const { name } = req.query;
        const { body } = res.locals;
        if (body) {
            await createGame(body);
            res.sendStatus(200);
        } else {
            if (name) {
                const query = await queryGames(name);
                res.status(200).send(query.rows);
            } else {
                const games = await getAllGames();
                res.status(200).send(games.rows);
            }
        }
        return;
    } catch (e) {
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default gamesController;