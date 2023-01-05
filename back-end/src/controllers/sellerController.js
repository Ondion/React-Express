const sellerService = require('../services/sellerService');

async function getAllSellersController(request, response) {
  const result = await sellerService.getAllSellers();
  return response.status(200).json(result);
}

module.exports = {
  getAllSellersController,
};
