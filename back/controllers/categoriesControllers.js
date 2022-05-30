import createCategory from "../database/queries/create/categories.js";
import { getCategories, verifyCategoryByName } from "../database/queries/retrieve/categories.js";

const categoriesController = async (req, res) => {
    try{
        if(res.locals){
            const { name } = res.locals;
            const query = await verifyCategoryByName(name);
            if(query.rowCount > 0){
                res.sendStatus(409);
                return;
            }
            const insert = await createCategory(name);
            res.sendStatus(201);
            return;
        }else{
            const query = await getCategories();
            res.status(200).send(query.rows);
            return;
        }
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default categoriesController;