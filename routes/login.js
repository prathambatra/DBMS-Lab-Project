const express = require('express')
const route = express.Router()
const passport = require(../passport/passport)

route.get('/',passport.authenticate('ls')

route.get('/callback',passport.authenticate('ls', {
	failureRedirect: ''
	successRedirect: ''
})

exports = module.exports = route