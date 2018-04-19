const route = require('express').Router()
const ctrl = require('../controllers/products')

route.get('/',(req,res) => {
    ctrl.getAllProducts()
        .then((products) => {
            res.render('admin',{
                products,
                isAdmin: req.isAdmin,
                isAuthenticated: req.isAuthenticated,
                username:req.username
                
            })
        })
            .catch((err) => {
                res.status(200).json({message : err.message})
            })
})

route.post('/',(req,res) => {
    ctrl.addProduct(req.body)
    .then((addedProd) => {
        res.redirect('/admin')
    }) 
    .catch((err) => {
        res.status(500).json({message : err.message})
    })
})

route.post('/delete',(req,res) => {
    ctrl.deleteProduct(req.body)
        .then(
            res.redirect('/admin')
        )
            .catch((err) => {
                console.log(err.message)
            })
})

exports = module.exports = route