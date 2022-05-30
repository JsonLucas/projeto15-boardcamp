import dbConnection from '../../dbConnection.js';

const createCustomer = async (customerData) => {
    const { name, phone, cpf, birthday } = customerData;
    const sql = `INSERT INTO customers (name, phone, cpf, birthday) 
    VALUES ('${name}', '${phone}', '${cpf}', '${birthday}')`;
    const creation = await dbConnection.query(sql);
    return creation;
}

export default createCustomer;