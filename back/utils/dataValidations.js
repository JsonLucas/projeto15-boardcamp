import joi from 'joi';

const schemaInsertCategory = joi.object({
    name: joi.string().required()
}); 

const schemaInsertGame = joi.object({
    name: joi.string().required(),
    stockTotal: joi.number().min(1).required(),
    pricePerDay: joi.number().min(1).required(),
    categoryId: joi.number().required()
});

const schemaInsertCustomer = joi.object({
    name: joi.string().required(),
    cpf: joi.number().min(11).required(),
    phone: joi.string().max(11).required(),
    birthday: joi.date().required()
});

const schemaInsertRent = joi.object({
    customerId: joi.number().min(1).required(),
    gameId: joi.number().min(1).required(),
    daysRented: joi.number().min(1).required()

});

export const validateInsertCategory = (categoryName) => {
    if(schemaInsertCategory.validate(categoryName).error){
        return false;
    }
    return true;
}

export const validateInsertGame = (gameData) => {
    if(schemaInsertGame.validate(gameData).error){
        return false;
    }
    return true;
}

export const validateInsertCustomer = (customerData) => {
    if(schemaInsertCustomer.validate(customerData).error){
        return false;
    }
    return true;
}

export const validateInsertRent = (rentData) => {
    if(schemaInsertRent.validate(rentData).error){
        return false;
    }
    return true;
}