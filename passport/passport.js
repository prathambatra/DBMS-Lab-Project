const passport = require('passport')
const strategies = require('strategies')
const user = require(../db/models).User

passport.use(strategies.Localstrategy)

passport.serializeUser()