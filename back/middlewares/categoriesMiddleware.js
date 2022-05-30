import { validateInsertCategory } from "../utils/dataValidations.js";

const categoriesMiddleware = (req, res, next) => {
    if(req.body){
        if(validateInsertCategory(req.body)){
            res.locals.name = req.body.name;
            next();
        }else{
            res.sendStatus(400);
        }
    }else{
        res.sendStatus(400);
        return;
    }
}

export default categoriesMiddleware;