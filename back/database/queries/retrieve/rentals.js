import dbConnection from "../../dbConnection.js";

const getRentals = async () => {
    const sql = `SELECT * FROM rentals`;
    const query = await dbConnection.query(sql);
    return query;
}

export default getRentals;