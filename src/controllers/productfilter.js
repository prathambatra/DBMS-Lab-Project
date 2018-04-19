const {Product} = require('../models')

exports = module.exports = {
    getProducts: (categoryID) => {
        //console.log(reqBody.CategoryCode)
        return Product.findAll({
            where: {
                category: parseInt(categoryID)
            }
        })
    }
}
