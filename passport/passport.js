const passport = require('passport')
const strategies = require('./strategies')
const {User} = require('../db/models')

passport.use(strategies.ls)

passport.serializeUser((user,done) => {
	console.log('serialize' + user.id)
	return done(null,user.id)
})

passport.deserializeUser((userID,done) => {
	console.log('desiralize' + userID)

	user.findOne({
		where : {
			id : userID
		}
	}).then(user => done(null,user))
		.catch((err) => console.log(err))
})

exports = module.exports = passport