'use strict';

const salesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Sales',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    underscored: true,
    tableName: 'sales_products',
    timestamps: false,
  });

  SalesProducts.associate = (models) => {
    models.Sale.belongsToMany(models.Product, { through: SalesProducts, foreignKey: 'saleId', otherKey: 'productId', as: 'products' });

    models.Product.belongsToMany(models.Sale, { through: SalesProducts, foreignKey: 'productId', otherKey: 'saleId', as: 'sales' }); 
  };

  return SalesProducts;
}

module.exports = salesProductsModel;
