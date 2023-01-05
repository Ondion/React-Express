const chai = require('chai');
const sinon = require('sinon');

const { Product } = require('../../database/models');
const productsService = require('../../services/productsService');

describe('test', async () => {

  beforeEach(async () => {
    sinon.stub(Product, 'findAll').resolves(1)
    sinon.stub(Product, 'findOne').resolves(1)
    sinon.stub(Product, 'create').resolves()
    sinon.stub(Product, 'update').resolves()
    sinon.stub(Product, 'destroy').resolves()
  });

  afterEach(async () => {
    Product.findAll.restore();
    Product.findOne.restore();
    Product.create.restore();
    Product.update.restore();
    Product.destroy.restore();
  });

  it('test', async () => {
    const result = await productsService.getAllProducts();
    chai.expect(result).to.be.deep.equal(1);
  });

  it('test', async () => {
    const result = await productsService.getProductById(1);
    chai.expect(result).to.be.deep.equal(1);
  });

  it('test', async () => {
    const result = await productsService.createProduct('name', 'price', 'urlImage');
    chai.expect(result.message).to.be.deep.equal('Product conflicted');
    Product.findOne.restore();
    sinon.stub(Product, 'findOne').resolves(false);
    const result2 = await productsService.createProduct('name', 'price', 'urlImage');
    chai.expect(result2.message).to.be.deep.equal('Product created');
  });

  it('test', async () => {
    const result = await productsService.updateProduct('id', 'name', 'price', 'urlImage');
    chai.expect(result.message).to.be.deep.equal('Product updated');
    Product.findOne.restore();

    sinon.stub(Product, 'findOne').resolves(false);
    const result2 = await productsService.updateProduct('id', 'name', 'price', 'urlImage');
    chai.expect(result2.message).to.be.deep.equal('Product not found');
  });

  it('test', async () => {
    const result = await productsService.deleteProduct(1);
    chai.expect(result.message).to.be.deep.equal('Product deleted');

    Product.findOne.restore();
    sinon.stub(Product, 'findOne').resolves(false);

    const result2 = await productsService.updateProduct('id', 'name', 'price', 'urlImage');
    chai.expect(result2).to.exist
    chai.expect(result2.message).to.be.deep.equal('Product not found');
    chai.expect(result2.status).to.be.deep.equal(404);
  });
});
