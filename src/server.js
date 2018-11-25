const express = require('express')
const hbs = require('express-hbs')
const path = require('path')
const session = require('express-session')
const passport = require('./passport/passport')
const db = require('./models').db

const app = express()

app.engine('hbs', hbs.express4({
    defaultLayout: path.join(__dirname, 'views/layouts/default.hbs'),
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views/pages'))

app.use('/', express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'lsdgdkhfbdkgbdk',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    if (req.user) {
        req.isAuthenticated = true
        req.username = req.user.username
        req.userId=req.user.id
        if(req.user.role == 1) {
            req.isAdmin = true
        }
    }
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/login', require('./routes/login'))
app.use('/home',require('./routes/home'))
app.use('/signup',require('./routes/signup'))
app.use('/admin',require('./routes/admin'))
app.use('/products',require('./routes/products'))
app.use('/cart',require('./routes/cart'))

app.get('/logout', (req, res) => {
    req.user = null
    req.logOut()
    req.session.destroy((err) => {
        res.redirect('/')
    })
})

app.get('/', (req, res) => {
    // if (!req.user) {
    //     return res.redirect('/login')
    // }
    return res.redirect('/home')
})

db.sync({alter: true})
    .then(() => {
        console.log("Database synchronized")
        app.listen(2626, () =>
            console.log("Server started on http://localhost:2626"))
    })

