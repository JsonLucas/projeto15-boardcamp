import dbConnection from '../../dbConnection.js';

const createCustomer = async (customerData) => {
    const { name, phone, cpf, birthday } = customerData;
    const sql = `INSERT INTO customers (name, phone, cpf, birthday) 
    VALUES ('$1', '$2', '$3', '$4')`;
    const creation = await dbConnection.query(sql, [name, phone, cpf, birthday]);
    return creation;
}

export default createCustomer;