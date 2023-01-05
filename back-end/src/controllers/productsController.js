const productService = require('../services/productsService');

async function getAllProducts(_request, response) {
  const result = await productService.getAllProducts();
  return response.status(200).json(result);
}

async function getProductById(request, response) {
  const { id } = request.params;
  const result = await productService.getProductById(id);
  // if (!result) return response.status(404).json({ message: 'Not found' });
  return response.status(200).json(result);
}

async function createProduct(request, response) {
  const { name, price, urlImage } = request.body;
  const result = await productService.createProduct(name, price, urlImage);
  return response.status(result.status).json({ message: result.message });
}

async function updateProduct(request, response) {
  const { id } = request.params;
  const { name, price, urlImage } = request.body;
  const result = await productService.updateProduct(id, name, price, urlImage);
  return response.status(result.status).json({ message: result.message });
}

async function deleteProduct(request, response) {
  const { id } = request.params;
  const result = await productService.deleteProduct(id);
  return response.status(result.status).json({ message: result.message });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
