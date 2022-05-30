import dbConnection from "../../dbConnection.js";

export const getAllCustomers = async () => {
    const sql = "SELECT * FROM customers";
    const query = await dbConnection.query(sql);
    return query;
}
export const groupOfCustomers = async (str) => {
    const sql = `SELECT * FROM customers WHERE cpf LIKE '${str}%'`;
    const query = await dbConnection.query(sql);
    return query;
}

export const getCustomerById = async (id) => {
    const sql = `SELECT FROM customers WHERE id=${id}`;
    const query = await dbConnection.query(sql);
    return query;
}

export const getCustomerByCpf = async (cpf) => {
    const sql = `SELECT * FROM customers WHERE cpf='${cpf}'`;
    const query = await dbConnection.query(sql);
    return query;
}