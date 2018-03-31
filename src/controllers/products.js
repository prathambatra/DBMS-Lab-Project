const {Category, Product} = require('../models')
const {isArray} = require('util')


exports = module.exports = {
    getAllProducts: () => {
        return Product.findAll({})
    },
    addProduct: async (reqBody) => {

        //Validate data
        if (!reqBody.name) {
            throw new Error("Cannot create product without name")
        }
        // Add more such validations here

        return Product.create({
            name: reqBody.name,
            vendor: reqBody.vendor,
            price: reqBody.price,
            categoryId: reqBody.category
        })


    }
}