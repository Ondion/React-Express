'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [{
      user_id: 2,
      seller_id: 1,
      total_price: 100.00,
      delivery_address: 'Rua dos Bobos, 0',
      delivery_number: '123',
      sale_date: new Date(),
      status: 'Pendente',
    }], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
