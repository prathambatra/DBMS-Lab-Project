const route = require('express').Router()
const ctrl = require('../controllers/product')

route.get('/',(req,res) => {
    ctrl.getAllProducts(req.query)
        .then((products) => {
            res.status(200).json(products)
        })
        .catch((err) => {
            res.status(500).json({message:err.message})

        })
})

route.post('/',(req,res) => {
    ctrl.addProduct(req.body)
        .then((AddedProduct) => {
            res.status(201).json(AddedProduct)
        })
        .catch((err) => {
            res.status(500).json({message:err.message})
        })
})

exports = module.exports = route