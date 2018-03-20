const express = require('express')
const session = require('express-session')
const hbs = require('express-hbs')
const app = express()
const path = require('path')
const passport = require('./passport/passport')
const db = require('./db/models').db

app.engine('hbs',hbs.express4({
	defaultLayout: path.join('__dirname','views/layouts/default.hbs'),
	partialsDir: path.join('__dirname','views/partials'),
	layoutsDir: path.join('dirname','views/layout')
}))

app.set('view engine','hbs')
app.set('views',path.join('__dirname','views/pages'))

app.use(session({
    secret : 'abc',
    resave : false,
    saveUninitialized : false
}))

app.use((req,res,next) => {
	if(req.user && req.user.role && req.user.role === 'admin') {
		req.isAdmin = true
	}
	next()
})

app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/login',require('./routes/login'))
app.use('/products',require('./routes/product'))
app.use('/categories',require('./routes/categories'))


app.use('/logout',(req,res) => {
	req.user = null
	req.logOut()
	req.session.destroy((err) => {
		res.redirect('/')
	})
})

app.get('/',(req,res) => {
	return res.redirect('/categories')
})

db.sync({alter: true})
	.then(()=> {
		console.log("Database synchronised")
		app.listen(2626, ()=> 
			console.log("server listening to port 2626"))
	})