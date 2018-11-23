const route  = require('express').Router()
const ctrl = require('../controllers/users')

let id = 0;

route.get('/',(req,res) => {
    res.render('signup')
})

route.post('/', (req, res) => {
    req.body.role=0;
    
    ctrl.addUser(req.body)
        .then((addedUser) =>
            res.redirect('/home')
        )
        .catch((err) =>
            res.status(500).json({message: err.message})
        )
})

exports = module.exports = route;