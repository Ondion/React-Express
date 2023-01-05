const chai = require('chai');
const sinon = require('sinon');

const { Sale, SalesProduct } = require('../../database/models');
const salesService = require('../../services/salesService');

describe('test', async () => {

  beforeEach(async () => {
    sinon.stub(Sale, 'findAll').resolves(1)
    sinon.stub(Sale, 'create').resolves({dataValues: {id: 1}})
    sinon.stub(Sale, 'findOne').resolves(1)
  });

  afterEach(async () => {
    Sale.findAll.restore();
    Sale.findOne.restore();
    Sale.create.restore();
  });

  it('test', async () => {
    const result = await salesService.getAllSales();
    chai.expect(result.status).to.be.deep.equal(200);

    Sale.findAll.restore();
    sinon.stub(Sale, 'findAll').resolves(0)

    const result2 = await salesService.getAllSales();
    chai.expect(result2.status).to.be.deep.equal(404);
  });

  it('test', async () => {
    const result = await salesService.getAllById(1);
    chai.expect(result).to.be.deep.equal(1);
  });

  it('test', async () => {
    const body = {
      userId: 1, sellerId: 1, saleDate: 1, totalPrice: 1,
      deliveryAddress: 1, deliveryNumber: 1, products: false,
    };
    const result = await salesService.createSale(body);
    chai.expect(result.status).to.be.deep.equal(404);
  });

  it('test', async () => {
    sinon.stub(Promise, 'all').resolves()
    sinon.stub(SalesProduct, 'create').resolves()
    const body = {
      userId: 1, sellerId: 1, saleDate: 1, totalPrice: 1,
      deliveryAddress: 1, deliveryNumber: 1, products: [{id: 1, quantity: 1}],
    };
    const result = await salesService.createSale(body);
    chai.expect(result.status).to.be.deep.equal(201);
  });

  it('test', async () => {
    const result = await salesService.getSaleById(1);
    chai.expect(result.status).to.be.deep.equal(200);

    Sale.findOne.restore();
    sinon.stub(Sale, 'findOne').resolves(0)

    const result2 = await salesService.getSaleById(1);
    chai.expect(result2.status).to.be.deep.equal(404);
  });

  it('test', async () => {
    const result = await salesService.updateSaleStatus(1, 1);
    chai.expect(result.status).to.be.deep.equal(200);

    Sale.findOne.restore();
    sinon.stub(Sale, 'findOne').resolves(0)

    const result2 = await salesService.updateSaleStatus(1, 1);
    chai.expect(result2.status).to.be.deep.equal(404);
  });
});
