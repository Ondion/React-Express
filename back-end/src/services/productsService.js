const { Product } = require('../database/models/index');

async function getAllProducts() {
  return Product.findAll();
}

async function getProductById(id) {
  return Product.findOne({ where: { id } });
}

async function createProduct(name, price, urlImage) {
  const doesProductExist = await Product.findOne({ where: { name } });
  if (!doesProductExist) {
    await Product.create({ name, price, urlImage });
    return { status: 201, message: 'Product created' };
  }
  return { status: 409, message: 'Product conflicted' };
}

async function updateProduct(id, name, price, urlImage) {
  const doesProductExist = await Product.findOne({ where: { id } });
  if (doesProductExist) {
    await Product.update({ name, price, urlImage }, { where: { id } });
    return { status: 200, message: 'Product updated' };
  }
  return { status: 404, message: 'Product not found' };
}

async function deleteProduct(id) {
  const doesProductExist = await Product.findOne({ where: { id } });
  if (doesProductExist) {
    await Product.destroy({ where: { id } });
    return { status: 200, message: 'Product deleted' };
  }
  return { status: 404, message: 'Product not found' };
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
