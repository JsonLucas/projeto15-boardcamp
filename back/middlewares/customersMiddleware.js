import { validateInsertCustomer } from "../utils/dataValidations.js";

const customersMiddleware = (req, res, next) => {
    const { id } = req.params;
    if(req.body){
        const { body } = req;
        if(validateInsertCustomer(req.body)){
            res.locals.body = body;
            next();
        }else{
            res.sendStatus(400);
        }
    }
}

export default customersMiddleware;