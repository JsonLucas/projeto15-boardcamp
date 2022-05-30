import dbConnection from '../../dbConnection.js';

const createGame = async (gameData) => {
    const { name, image, stockTotal, categoryId, pricePerDay } = gameData;
    const sql = `INSERT INTO games 
    VALUES (${null}, '${name}', '${image}', ${stockTotal}, ${categoryId}, ${pricePerDay})`;
    const creation = await dbConnection.query(sql);
    return creation;
}

//`INSERT INTO categories (name) VALUES ('${categoryName}')`

export default createGame;
