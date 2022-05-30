import dbConnection from '../../dbConnection.js';
import dayjs from 'dayjs';

const createRental = async (rentalData) => {
    const { customerId, gameId, daysRented } = rentalData;
    const date = dayjs(Date.now()).format('YYYY-MM-DD');
    const originalPrice = 'days rented * (price per day da tabela games)';
    const sql = `INSERT INTO rentals (customerId, gameId, rentDate, daysRented, originalPrice) 
    VALUES (${customerId}, ${gameId}, ${date}, ${daysRented}, ${originalPrice})`;
    const creation = await dbConnection.query(sql);
    return creation;
}

export default createRental;
