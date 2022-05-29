import dbConnection from '../../dbConnection.js';

const createRental = async () => {
    const sql = `INSERT INTO rentals (customerId, gameId, rentDate, daysRented, returnDate, originalPrice, delayFee) 
    VALUES (${1}, ${1}, ${Date.now()}, ${1}, ${null}, ${30}, ${1})`;
    const creation = await dbConnection.query(sql);
    return creation;
}

export default createRental;
