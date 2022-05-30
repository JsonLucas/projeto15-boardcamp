import dbConnection from '../../dbConnection.js';

export const getAllGames = async () => {
    const sql = "SELECT * FROM games";
    const games = await dbConnection.query(sql);
    return games;
} 

export const queryGames = async (queryStr) => {
    const sql = `SELECT * FROM games WHERE name LIKE '${queryStr}%' or name LIKE '%${queryStr}%'`;
    const result = await dbConnection.query(sql);
    return result;
}

export const getGameById = async (gameId) => {
    const sql = `SELECT * FROM games WHERE id=${gameId}`;
    const result = await dbConnection.query(sql);
    return result;
}