const categoriesController = async (req, res) => {
    try{
        const { name } = res.locals;
        console.log(name);
        res.status(200).send({});
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error');
    }
}

export default categoriesController;