const route = require('express').Router()
const ctrl = require('../controllers/categories')

route.get('/',(req,res) => {
    ctrl.getAllCategories(req.query)
        .then((categories) => {
            //res.status(200)
            res.render('categories' , {
                categories,
                userAuthenticated: !!req.user,
                isAdmin: req.isAdmin
            })
        })
        .catch((err) => {
            res.status(500).json({message: err.message})
        })
})


route.post('/',(req,res) => {
    if(!req.isAdmin) {
        return res.status(403).json({message: 'Unauthorized'})
    }

    ctrl.addCategory(req.body)
        .then((addedCategory) => {
            res.redirect('/categories')
        })
        .catch((err) => {
            res.status(500).json({message: err.message})
        })
})

exports = module.exports = route