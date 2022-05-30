import createCustomer from "../database/queries/create/customer.js";
import updateCustomer from "../database/queries/update/customer.js";
import { getAllCustomers, getCustomerByCpf, getCustomerById, groupOfCustomers } from "../database/queries/retrieve/customers.js";

const customersController = async (req, res) => {
    const { cpf } = req.query; //trecho de cpf
    const { id } = req.params;
    const { body } = res.locals;
    try{
        if(body){
            const customerExists = await getCustomerByCpf(body.cpf);
            if(customerExists.rowCount > 0){
                res.sendStatus(409);
                return;
            }else{
                if(id){
                    await updateCustomer(id, body);
                    res.sendStatus(200);
                }else{
                    await createCustomer(body);
                    res.sendStatus(201);
                } 
            }
        }else{
            if(cpf){
                const queryCustomers = await groupOfCustomers(cpf);
                res.status(200).send(queryCustomers.rows);
            }else if(id){
                const getCustomer = await getCustomerById(id);
                if(getCustomer.rowCount > 0){
                    res.status(200).send(getCustomer.rows);
                }else{
                    res.sendStatus(404);
                }
            }else{
                const allCustomers = await getAllCustomers();
                res.status(200).send(allCustomers.rows);
            }
        }
        return;
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default customersController;