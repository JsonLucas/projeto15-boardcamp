import createRental from "../database/queries/create/rentals.js";
import deleteRent from "../database/queries/delete/rentals.js";
import { getRentals, getCustomerRentals, getGameRentals } from "../database/queries/retrieve/rentals.js";

const rentalsController = async (req, res) => {
    try{
        const { id, body } = res.locals;
        const { query } = req;
        const queryKeys = Object.keys(query);
        if(queryKeys.length > 0){
            if(queryKeys.find((item) => { return item === 'customerId' })){
                const queryCustomerRentals = await getCustomerRentals(query.customerId);
                res.status(200).send(queryCustomerRentals.rows);
            }else if(queryKeys.find((item) => { return item === 'gameId' })){
                const queryGameRentals = await getGameRentals(query.gameId);
                res.status(200).send(queryGameRentals.rows);
            }else{
                const rentals = await getRentals();
                res.status(200).send(rentals.rows);
            }
        }else if(body){
            await createRental(body);
            res.sendStatus(201);
        }else if(id){
            await deleteRent(id);
            res.sendStatus(200);
        }else{
            const rentals = await getRentals();
            res.status(200).send(rentals.rows);
        }
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default rentalsController;