const categoriesMiddleware = (req, res, next) => {
    if(req.body){
        res.locals.name = req.body.name;
        next();
    }else{
        res.sendStatus(400);
        return;
    }
}

export default categoriesMiddleware;