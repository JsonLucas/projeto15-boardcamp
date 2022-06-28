import dbConnection from '../../dbConnection.js';

const createCategory = async (categoryName) => {
    const sql = `INSERT INTO categories (name) VALUES ('$1')`;
    const creation = await dbConnection.query(sql, [categoryName]);
    return creation;
}

export default createCategory;