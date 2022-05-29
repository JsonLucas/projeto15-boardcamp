import dbConnection from '../../dbConnection.js';

const createCustomer = async () => {
    const sql = `INSERT INTO customers (name, phone, cpf, birthday) 
    VALUES ('starlord', '(12)12345-1234', ${Date.now()})`;
    const creation = await dbConnection.query(sql);
    return creation;
}

export default createCustomer;