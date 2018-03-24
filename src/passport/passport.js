const passport = require('passport')
const strategy = require('./strategies')
const user = require('../models').User

passport.use(strategy.ls)

passport.serializeUser(function (user,done) {
    console.log('serialize' + user.id)
    done(null,user.id)
})

passport.deserializeUser(function (userId,done) {
    console.log('deserialize' + userId)

    user.findOne({
        where: {
            id: userId
        }
    }).then((user) => done(null,user))
        .catch((err) => done(err))
})

exports = module.exports = passport