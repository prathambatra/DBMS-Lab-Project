const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const dbConfig = require('../config').DB

const db = new Sequelize(
    'testdb',
    'testuser',
    'testpass',
    {
        dialect: 'mysql',
        host: 'localhost',
        pool: {
            min:0,
            max:5,
        }
    }
)

const Product = db.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vendor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    }
})

const User= db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role : {
        type: DataTypes.INTEGER,
        allowNull:false
    }
})

const CartItem = db.define('cartItem', {
    quantity: DataTypes.SMALLINT,
    amount: DataTypes.FLOAT
})

CartItem.belongsTo(Product)
CartItem.belongsTo(User)

User.hasMany(CartItem)


exports = module.exports = {
    db,
    Product,
    User,
    CartItem
}