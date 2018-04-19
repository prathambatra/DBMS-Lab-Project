const route = require('express').Router()
const ctrl = require('../controllers/productfilter')

route.get('/',(req,res) => {
    ctrl.getProducts(0)
        .then((Products)=> {
            //console.log(Products)
            res.render('mensClothes',{
                Products
            })
        })
            .catch((err) => console.log(err.message))
})

exports = module.exports = route