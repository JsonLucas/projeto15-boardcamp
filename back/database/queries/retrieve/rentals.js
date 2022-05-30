import dbConnection from "../../dbConnection.js";
import { getCustomerById } from "./customers.js";
import { getGameById } from "./games.js";

export const getRentals = async () => {
    const sql = `SELECT * FROM rentals`;
    const query = await dbConnection.query(sql);
    if(query.rowCount > 0){
        const { rows } = query;
        let result = [];
        for(let i = 0; i < rows.length; i++){
            const game = await getGameById(rows[i].gameId);
            const customer = await getCustomerById(rows[i].customerId);
            result.push({
                ...rows[i], 
                customer: {id: customer.rows[0].id, name: customer.rows[0].name}, 
                game: {...game.rows[0]}
            });
        }
        return result;
    }
    return query;
}

export const getRentalById = async (rentId) => {
    const sql = `SELECT * FROM rentals WHERE id=${rentId}`;
    const rental = await dbConnection.query(sql);
    return rental;
}

export const getCustomerRentals = async (customerId) => {
    const sql = `SELECT * FROM rentals WHERE customerId=${customerId}`;
    const customerRentals = await dbConnection.query(sql);
    if(customerRentals.rowCount > 0){
        const { rows } = customerRentals;
        let result = [];
        for(let i = 0; i < rows.length; i++){
            const game = await getGameById(rows[i].gameId);
            const customer = await getCustomerById(rows[i].customerId);
            result.push({
                ...rows[i], 
                customer: {id: customer.rows[0].id, name: customer.rows[0].name}, 
                game: {...game.rows[0]}
            });
        }
        return result;
    }
    return query;
} 

export const getGameRentals = async (gameId) => {
    const sql = `SELECT * FROM rentals WHERE gameId=${gameId}`;
    const gameRentals = await dbConnection.query(sql);
    if(gameRentals.rowCount > 0){
        const { rows } = gameRentals;
        let result = [];
        for(let i = 0; i < rows.length; i++){
            const game = await getGameById(rows[i].gameId);
            const customer = await getCustomerById(rows[i].customerId);
            result.push({
                ...rows[i], 
                customer: {id: customer.rows[0].id, name: customer.rows[0].name}, 
                game: {...game.rows[0]}
            });
        }
        return result;
    }
    return query;
} 
