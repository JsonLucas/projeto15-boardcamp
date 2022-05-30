import dayjs from "dayjs";
import finalizeRental from "../database/queries/update/rentals.js";
const rerturnRentalController = async (req, res) => {
    try{
        const { id, rentDate, gameId } = res.locals;
        await finalizeRental(id, rentDate, gameId);
        res.sendStatus(200);
        return;
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
        return;
    }
}

export default rerturnRentalController;

/*
const day1 = new Date(dayjs("1992-10-05T03:00:00.000Z").format('YYYY-MM-DD')); 
const day2 = new Date(dayjs(Date.now()).format('YYYY-MM-DD'));

const difference= Math.abs(day2-day1);
const days = difference/(1000 * 3600 * 24);
console.log(days);
*/