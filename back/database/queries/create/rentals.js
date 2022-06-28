import dbConnection from '../../dbConnection.js';
import dayjs from 'dayjs';
import { getGameById } from '../retrieve/games.js';

const createRental = async (rentalData) => {
    const { customerId, gameId, daysRented } = rentalData;
    const getGamePrice = await getGameById(gameId);
    const { rows } = getGamePrice;
    const originalPrice = rows[0].pricePerDay * daysRented;
    const date = dayjs(Date.now()).format('YYYY-MM-DD');
    const sql = `INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "originalPrice") 
    VALUES ('$1', '$2', '$3', '$4', '$5')`;
    const creation = await dbConnection.query(sql, [customerId, gameId, date, daysRented, originalPrice]);
    return creation;
}

export default createRental;
