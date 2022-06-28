import dbConnection from "../../dbConnection.js";

const deleteRent = async (rentalId) => {
    const sql = `DELETE FROM rentals WHERE id='$1'`;
    const action = await dbConnection.query(sql, [rentalId]);
    return action;
} 

export default deleteRent;