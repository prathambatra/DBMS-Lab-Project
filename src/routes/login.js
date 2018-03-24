const route = require('express').Router()
const passport = require('../passport/passport')

route.get('/', passport.authenticate('ls', {
    failureRedirect: '/',
    successRedirect: '/'
}))

exports = module.exports = route