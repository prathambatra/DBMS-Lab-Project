const route  = require('express').Router()

route.get('/',(req,res) => {
    res.status(200).render('home')
})

exports = module.exports = route