const LS = require('passport-local').Strategy
const user = require('../models').User

const ls = new LS(
    (username,password,done) => {
        user.findOne({
            where: {
                username: username
            }
        }).then(
            (user) => {
                if(!user) {
                    return done(null,false,{message: 'Wrong Username'})
                }
                if(user.password == password) {
                    return done(null,user)
                }
                else {
                    return done(null,false,{message: 'Wrong Password'})
                }
            }
        )
            .catch((err) => {
                return done(err)
            })
    }
)

exports = module.exports = {ls}