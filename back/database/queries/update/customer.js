import dbConnection from "../../dbConnection.js";

const updateCustomer = async (customerId, customerData) => {
    const { name, phone, cpf, birthday } = customerData
    const sql = `UPDATE customers SET name=$1, phone=$2, 
    cpf=$3, birthday=$4 WHERE id=$5`;
    const update = await dbConnection.query(sql, [name, phone, cpf, birthday, customerData]);
    return update;
}

export default updateCustomer;