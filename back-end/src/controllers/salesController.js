const salesService = require('../services/salesService');

async function getAllSales(request, response) {
  const result = await salesService.getAllSales();
  return response.status(result.status).json(result.message);
}

async function getAllById(request, response) {
  const { id } = request.params;
  const result = await salesService.getAllById(id);
  response.status(200).json(result);
}

async function createSale(request, response) {
  try {
    const {
      sellerId, totalPrice, deliveryAddress, deliveryNumber, products, userId,
    } = request.body;
  
    const createdSale = await salesService.createSale({
      userId,
      saleDate: new Date(),
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products,
    });
    return response.status(createdSale.status).json(createdSale.message);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Algo deu errado' });
  }
}

async function getSaleById(request, response) {
  try {
    const { id } = request.params;
    const sale = await salesService.getSaleById(id);
    return response.status(sale.status).json(sale.message);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'Algo deu errado' });
  }
}

async function updateSaleStatus(request, response) {
  try {
    const { id } = request.params;
    const { status } = request.body;
    const sale = await salesService.updateSaleStatus(id, status);
    return response.status(sale.status).json(sale.message);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: 'erro' });
  }
}

module.exports = {
  getAllById,
  createSale,
  getSaleById,
  updateSaleStatus,
  getAllSales,
};
