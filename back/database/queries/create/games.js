import dbConnection from '../../dbConnection.js';

const createGame = async (gameData) => {
    const { name, image, stockTotal, categoryId, pricePerDay } = gameData;
    const sql = `"INSERT INTO games (name, image, stockTotal, categoryId, pricePerDay) 
    VALUES ('${name}', '${image}', ${stockTotal}, ${categoryId}, ${pricePerDay})"`;
    const creation = await dbConnection.query(sql);
    return creation;
}

export default createGame;
