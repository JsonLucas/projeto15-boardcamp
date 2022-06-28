import dbConnection from '../../dbConnection.js';

const createGame = async (gameData) => {
    const { name, image, stockTotal, categoryId, pricePerDay } = gameData;
    const sql = `INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") 
    VALUES ('$1', '$2', '$3', '$4', '$5')`;
    const creation = await dbConnection.query(sql, [name, image, stockTotal, categoryId, pricePerDay]);
    return creation;
}

export default createGame;
