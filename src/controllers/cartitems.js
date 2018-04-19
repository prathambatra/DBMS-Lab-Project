const {Product,CartItem,User} = require('../models')
const proctrl = require('../controllers/products')

exports = module.exports = {
    getCartItems: (reqbody) => {
       return CartItem.findAll({
            where: {
                userId: reqbody.userId
            }
        }) 
    },

    addCartItem: async(reqbody) => {
        CartItem.findOne({
            include : [
                {
                    model : Product,
                    where: {
                        id : reqbody.productId
                    }
                }
            ],
            include : [
                {
                    model : User,
                    where: {
                        id : reqbody.userId
                    }
                }
            ]
        })
            .then((cart) => {
                if(!cart) {
                    return CartItem.create({
                        userId: parseInt(reqbody.userId),
                        productId: parseInt(reqbody.productId),
                        quantity: parseInt(1),
                        amount: parseInt(reqbody.price)
                    })
                }

                else {
                    return cart.increment({
                        'quantity': 1
                    })
                }
            })
                .catch((err) => {
                    throw new Error(err.message)
                })
    }
}