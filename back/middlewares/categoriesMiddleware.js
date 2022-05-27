const categoriesMiddleware = (req, res, next) => {
    if(req.body){
        res.locals.name = req.body.name;
    }
    next();
}

export default categoriesMiddleware;