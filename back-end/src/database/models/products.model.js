'use strict'

const productsModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    urlImage: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  return Products;
}

module.exports = productsModel;
