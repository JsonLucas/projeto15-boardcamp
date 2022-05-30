import dbConnection from "../../dbConnection.js";

const updateCustomer = async (customerId, customerData) => {
    const { name, phone, cpf, birthday } = customerData
    const sql = `UPDATE customers SET name='${name}', phone='${phone}', 
    cpf='${cpf}', birthday='${birthday}' WHERE id=${customerId}`;
    const update = await dbConnection.query(sql);
    return update;
}

export default updateCustomer;