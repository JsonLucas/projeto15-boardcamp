const rentalsMiddleware = (req, res, next) => {
    if(req.query){
        const id = {...req.query};
        res.locals.id = id;
    }else{
        const { body } = req;
        res.locals.body = body;
    }
    next();
}

export default rentalsMiddleware;