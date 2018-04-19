const route = require('express').Router()
const ctrl = require('../controllers/cartitems')


route.get('/', (req, res) => {
    req.body.userId = req.user.id
    ctrl.getCartItems(req.body)
        .then((cartItems) => {
            res.render('cart',{
                cartItems
            })
        })
            .catch((err) => {
                console.log(err.message)
            })
})

route.post('/', (req, res) => {
    req.body.userId = req.user.id
    ctrl.addCartItem(req.body)
        .then(
            res.redirect('/cart')
        )
            .catch((err) => {
                console.log(err.message)
            })

})

exports = module.exports = route