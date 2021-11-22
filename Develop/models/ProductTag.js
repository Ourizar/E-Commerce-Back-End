const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      auto_increment: true,
    },
    product_id: {
      type: DataType.INTEGER,
      allowNull: false,
      primaryKey: true,
      auto_increment: true,
    },
    tag_id: {
      type: DataType.INTEGER,
      references: {
        model: "Tag",
        key: "id",
      },
    },    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
