const rentalsMiddleware = (req, res, next) => {
    console.log(req.body);
    next();
}

export default rentalsMiddleware;