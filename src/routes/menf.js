const route = require('express').Router()
const ctrl = require('../controllers/productfilter')

route.get('/',(req,res) => {
    ctrl.getProducts(1)
        .then((Products)=> {
            //console.log(Products)
            res.render('menFoot',{
                Products
            })
        })
            .catch((err) => console.log(err.message))
})

exports = module.exports = route