import getRentals from "../database/queries/retrieve/rentals.js";

const rentalsController = async (req, res) => {
    try{
        const query = await getRentals();
        res.status(200).send(query.rows);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default rentalsController;