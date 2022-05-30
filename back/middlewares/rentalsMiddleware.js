import { getGameById } from "../database/queries/retrieve/games.js";
import { getRentalById } from "../database/queries/retrieve/rentals.js";
import { getCustomerById } from "../database/queries/retrieve/customers.js";
import { validateInsertRent } from "../utils/dataValidations.js";

const rentalsMiddleware = async (req, res, next) => {
    const { body } = req;
    const { id } = req.params;
    try{
        if(Object.keys(body).length > 0){
            if(validateInsertRent(body)){
                const customer = await getCustomerById(body.customerId);
                if(customer.rowCount > 0){
                    const game = await getGameById(body.gameId);
                    if(game.rowCount === 0){
                        res.sendStatus(400);
                        return;
                    }
                    res.locals.body = body;
                }
            }else{
                res.sendStatus(400);
                return;
            }
        }else{
            if(id){
                const rental = await getRentalById(id);
                if(rental.rowCount > 0){
                    if(rental[0].returnDate !== null){
                        res.sendStatus(400);
                        return;
                    }
                    res.locals.rentDate = rental[0].rentDate;
                    res.locals.gameId = rental[0].gameId;
                    res.locals.id = id;
                }else{
                    res.sendStatus(404);
                    return;
                }
            }
        }
        next();
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default rentalsMiddleware;