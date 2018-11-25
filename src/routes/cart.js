const route = require('express').Router()
const ctrl = require('../controllers/cartitems')

route.post('/',(req,res) => {
    req.body.userId = req.userId
    ctrl.addCartItem(req.body)
        .then(() => {
            res.send({
                success: true
            })
        })
            .catch((err)=> {
                res.send({
                    success: false
                })
            })
})

exports = module.exports = route