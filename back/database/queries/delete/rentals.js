import dbConnection from "../../dbConnection.js";

const deleteRent = async (rentalId) => {
    const sql = `DELETE FROM rentals WHERE id=${rentalId}`;
    const action = await dbConnection.query(sql);
    return action;
} 

export default deleteRent;