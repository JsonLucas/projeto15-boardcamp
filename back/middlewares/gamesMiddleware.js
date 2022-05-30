import { verifyCategoryById } from "../database/queries/retrieve/categories.js";
import { queryGames } from "../database/queries/retrieve/games.js";
import { validateInsertGame } from "../utils/dataValidations.js";

const gamesMiddleware = async (req, res, next) => {
    const { body } = req;
    const { name, stockTotal, pricePerDay, categoryId } = body;
    try{
        if(validateInsertGame({name, stockTotal, pricePerDay, categoryId})){
            const categoryExists = await verifyCategoryById(parseInt(body.categoryId));
            if(categoryExists.rowCount === 0){
                res.sendStatus(400);
            }else{
                const gameExists = await queryGames(body.name);
                if(gameExists.rowCount > 0){
                    res.sendStatus(409);
                    return;
                }
                res.locals.body = body;
                next();
            }
        }else{ res.sendStatus(400); }
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default gamesMiddleware;