const Localstrategy = require('passport-local').Strategy
const {User} = require('../db/models').User

const ls = new Localstrategy(
	(username,password,done) => {
		user.findOne({
			where : {
				username: username
			}
		}).then((user) => {
			if(!user) {
				return done(null,false,{message : "Wrong Usename"})
			}
			if(user.password == password) {
				return done(null,user)
			}
			else {
				return done(null,false,{message : "Wrong Password"})
			}

		}).catch((err) => {
			done(err)
		})
	}
)

exports = module.exports = {
	ls
}