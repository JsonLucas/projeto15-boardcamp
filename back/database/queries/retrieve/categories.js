import dbConnection from "../../dbConnection.js";

export const getCategories = async () => {
    const sql = "SELECT * FROM categories";
    const query = await dbConnection.query(sql);
    return query;
}

export const verifyCategoryById = async (categoryId) => {
    const sql = `SELECT * FROM categories WHERE id=$1`
    const query = await dbConnection.query(sql, [categoryId]);
    return query;
}

export const verifyCategoryByName = async (categoryName) => {
    const sql = `SELECT * FROM categories WHERE name=$1`;
    const query = await dbConnection.query(sql, [categoryName]);
    return query;
}