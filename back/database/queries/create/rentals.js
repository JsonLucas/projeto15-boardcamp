import dbConnection from '../../dbConnection.js';
import dayjs from 'dayjs';
import { getGameById } from '../retrieve/games.js';

const createRental = async (rentalData) => {
    const { customerId, gameId, daysRented } = rentalData;
    const getGamePrice = await getGameById(gameId);
    const { rows } = getGamePrice;
    const originalPrice = rows[0].pricePerDay * daysRented;
    const date = dayjs(Date.now()).format('YYYY-MM-DD');
    const sql = `INSERT INTO rentals (customerId, gameId, rentDate, daysRented, originalPrice) 
    VALUES (${customerId}, ${gameId}, '${date}', ${daysRented}, ${originalPrice})`;
    const creation = await dbConnection.query(sql);
    return creation;
}

export default createRental;
