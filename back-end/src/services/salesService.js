const { Sale, SalesProduct, User, Product } = require('../database/models');

async function getAllSales() {
  const sales = await Sale.findAll();
  if (sales) {
    return { status: 200, message: sales };
  }
  return { status: 404, message: 'Sales not found' };
}    

async function getAllById(userId) {
  return Sale.findAll({ where: { userId } });
}

async function createSale(body) {
  const {
    userId, sellerId, saleDate, totalPrice, deliveryAddress, deliveryNumber, products,
  } = body;
  if (products) {
    const createdSale = await Sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pendente', saleDate,
    });

    await Promise.all(products
      .map(({ id, quantity }) => SalesProduct
        .create({ saleId: createdSale.dataValues.id, productId: id, quantity })));
  
    return { status: 201, message: createdSale.dataValues };
  }
  return { status: 404, message: 'Missing products' };
}

async function getSaleById(id) {
  const sale = await Sale.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['name', 'email', 'role'] },
      { model: Product, as: 'products' },
      { model: User, as: 'seller', attributes: ['name'] },
    ],
  });
  if (sale) {
    return { status: 200, message: sale };
  }
  return { status: 404, message: 'Sale not found' };
}

// atualiza o status da venda
async function updateSaleStatus(id, status) {
  const sale = await Sale.findOne({ where: { id } });
  if (sale) {
    await Sale.update({ status }, { where: { id } });
    return { status: 200, message: 'Sale updated successfully' };
  }
  return { status: 404, message: 'Sale not found' };
}

module.exports = {
  getAllById,
  createSale,
  getSaleById,
  updateSaleStatus,
  getAllSales,
};
