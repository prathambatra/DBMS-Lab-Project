const route  = require('express').Router()

route.get('/',(req,res) => {
    res.status(200).render('home', {
        isAuthenticated: req.isAuthenticated,
        username: req.username
    })
})

exports = module.exports = route