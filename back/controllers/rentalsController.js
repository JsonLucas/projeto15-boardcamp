import createRental from "../database/queries/create/rentals.js";
import { getRentals, getCustomerRentals, getGameRentals } from "../database/queries/retrieve/rentals.js";

const rentalsController = async (req, res) => {
    try{
        const { id, body } = res.locals;
        const keys = Object.keys(id);
        if(id){
            if(keys.find((item) => { return item === 'customerId' })){
                const query = await getCustomerRentals(id.customerId);
                res.status(200).send(query.rows);
            }else if(keys.find((item) => { return item === 'gameId' })){
                const query = await getGameRentals(id.gameId);
                res.status(200).send(query.rows);
            }else{
                const query = await getRentals();
                res.status(200).send(query.rows);
            }
        }else{
            await createRental(body);
            res.sendStatus(201)
        }
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default rentalsController;