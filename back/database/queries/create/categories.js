import dbConnection from '../../dbConnection.js';

const createCategory = async (categoryName) => {
    const sql = `INSERT INTO categories (name) VALUES ("${categoryName}")`;
    const creation = await dbConnection.query(sql);
    return creation;
}

export default createCategory;