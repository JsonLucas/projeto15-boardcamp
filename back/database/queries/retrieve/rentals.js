import dbConnection from "../../dbConnection.js";

export const getRentals = async () => {
    const sql = `SELECT * FROM rentals`;
    const query = await dbConnection.query(sql);
    return query;
}

export const getCustomerRentals = async (customerId) => {
    const sql = `SELECT customers.*, rentals.customerId FROM customers JOIN rentals ON
    customerId.${parseInt(customerId)}=customers.id`;
    const customerRentals = dbConnection.query(sql);
    return customerRentals;
} 

export const getGameRentals = async (gameId) => {
    const sql = `SELECT * FROM rentals JOIN games gameId.${parseInt(gameId)}=games.id`;
    const customerRentals = dbConnection.query(sql);
    return customerRentals;
} 
