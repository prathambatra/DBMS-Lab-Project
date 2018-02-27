const sequelize = require('sequelize')
const datatypes = sequelize.DataTypes

const dbconfig = require('config').DB

const db = new sequelize (
    dbconfig.NAME,
    dbconfig.USERNAME,
    dbconfig.PASSWORD,
    {
        dialect: 'mysql'
    }
    )

const Category = db.define('category', {
    name : {
        type : datatypes.STRING,
        allowNull : false
    },
    taxperc : {
        type : datatypes.FLOAT,
        defaultValue : 0
    }
})

const Product = db.define('product', {
    name : {
        type : datatypes.STRING,
        allowNull : false
    },
    vendor : {
        type : datatypes.STRING,
        allowNull : false
    },
    price : {
        type : datatypes.FLOAT,
        defaultValue : 0
    }
})

Product.belongsTo(Category)

const User = db.define('user', {
    id : {
        type : datatypes.INTEGER,
        allowNull : false
    },
    name : {
        type : datatypes.STRING,
        allowNull : false
    },
    role : {
        type : datatypes.STRING,
        allowNull : true
    }
})

exports = module.exports = {
    User,Product,Category
}