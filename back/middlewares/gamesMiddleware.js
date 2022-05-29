import { verifyCategoryById } from "../database/queries/retrieve/categories.js";
import { queryGames } from "../database/queries/retrieve/games.js";

const gamesMiddleware = async (req, res, next) => {
    const { body } = req;
    try{
        if((body.name !== '') || (body.stockTotal > 0) || (body.pricePerDay > 0)){
            const categoryExists = await verifyCategoryById(parseInt(body.categoryId));
            if(categoryExists.rows){
                res.sendStatus(400);
            }else{
                const gameExists = await queryGames(body.name);
                if(gameExists.rows){
                    res.sendStatus(409);
                    return;
                }
                res.locals.body = body;
                next();
            }
        }
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default gamesMiddleware;