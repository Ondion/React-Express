'use strict';

const salesModel = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sale',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'Users',
          key: 'id'
        },
      },
      totalPrice: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2)
      },
      deliveryAddress: {
        allowNull: false,
        type: DataTypes.STRING
      },
      deliveryNumber: {
        allowNull: false,
        type: DataTypes.STRING
      },
      saleDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      tableName: 'sales',
      timestamps: false,
    }
  );

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Sales.belongsTo(models.User, { as: 'seller', foreignKey: 'sellerId' });
  };

  return Sales;
};

module.exports = salesModel;
