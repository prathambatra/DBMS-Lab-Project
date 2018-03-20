const {Category} = require('../db/models')

exports = module.exports = {
    getAllCategories: () => {Category.findAll({})},

    addCategory: async(reqBody) => {
        if(!reqBody.name) {
            throw new Error('Cannot create without name')
        }

        return Category.create({
            name:reqBody.name,
            tax_perc:reqBody.tax_perc
        })

    }
}

