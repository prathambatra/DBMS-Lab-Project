const route  = require('express').Router()
const ctrl = require('../controllers/products')

route.get('/',(req,res) => {
    ctrl.getAllProducts()
        .then((products) => {
            res.status(200).render('home', {
                products: products,
                isAuthenticated: req.isAuthenticated,
                username: req.username,
            })
        })
})

exports = module.exports = route