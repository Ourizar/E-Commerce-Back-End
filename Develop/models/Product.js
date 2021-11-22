// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
const { Category } = require(".");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      auto_increment: true,
    },
    product_name: {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    price: {
      id: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: { isDecimal: true },
      },
    },
    stock: {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 10,
        validate: { isNumeric: true },
      },
    },
    category_id: {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Category",
          key: "id",
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
