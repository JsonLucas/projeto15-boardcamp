import dayjs from "dayjs";
import dbConnection from "../../dbConnection.js";
import { getGameById } from "../retrieve/games.js";

const finalizeRental = async (rentId, rentDate, gameId) => {
    const game = await getGameById(gameId);

    const todaysDate = dayjs(Date.now()).format('YYYY-MM-DD');
    const delayDays = Math.abs(new Date(todaysDate) - new Date(dayjs(rentDate).format('YYYY-MM-DD')));
    const formatDays = delayDays/(1000*3600*24);
    
    const delayFee = formatDays*game.rows[0].pricePerDay;

    const sql = `UPDATE rentals SET "returnDate"=$1 , "delayFee"=$2 WHERE id=$3`;
    const rental = await dbConnection.query(sql, [todaysDate, delayFee, gameId]);
    return rental;
}

export default finalizeRental;
