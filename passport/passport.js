const passport = require('passport')
const strategies = require('strategies')
const user = require(../db/models).User

passport.use(strategies.ls)

passport.serializeUser((user,done) => {
	return done(null,user.id)
})

passport.deserializeUser((userID,done) => {
	user.find({
		where : {
			id : userID
		}
	}).then(user => done(null,user))
		.catch((err) => console.log(err))
})

exports = module.exports = passport