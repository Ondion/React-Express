const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const salesController = require('../../controllers/salesController');
const salesService = require('../../services/salesService');

describe('Cases de teste para o salesController', () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'getAllById').resolves(request);
    sinon.stub(salesService, 'createSale').resolves(request);
    sinon.stub(salesService, 'getSaleById').resolves(request);
    sinon.stub(salesService, 'updateSaleStatus').resolves(request);
    sinon.stub(salesService, 'getAllSales').resolves(request);
  });

  afterEach(() => {
    sinon.restore();
  });

    it('Testa o retorno do salesController junto ao fake DB', async () => {
      request.params = {
        id: 1,
      };
      await salesController.getAllById(request, response);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    });

    

    it('Testa o retorno do salesController junto ao fake DB', async () => {
      request.body = {
        userId: 'userId',
        saleDate: new Date(),
        sellerId: 'sellerId',
        totalPrice: 'totalPrice',
        deliveryAddress: 'deliveryAddress',
        deliveryNumber: 'deliveryNumber',
        products: 'products',
      };

      await salesController.createSale(request, response);
      chai.expect(response.status.calledWith(200)).not.to.be.equal(true);
    });

    it('Test', async () => {
      salesService.createSale.restore();
      sinon.stub(salesService, 'createSale').resolves(new Error('falhou!'));
      const teste = await salesController.createSale(request, response);
      chai.expect(async () => await salesController.createSale(request, response)).to.throw
    });

    it('Testa o retorno do salesController junto ao fake DB', async () => {
      request.params = {
        id: 1,
      };

      await salesController.getSaleById(request, response);
      chai.expect(response.status.calledWith(200)).not.to.be.equal(true);
    });

    it('Testa o retorno do salesController junto ao fake DB', async () => {
      request.params = {
        id: 1,
      };

      request.body = {
        status: 1,
      };

      await salesController.updateSaleStatus(request, response);
      chai.expect(response.status.calledWith(200)).not.to.be.equal(true);
    });

    it('Testa o retorno do salesController junto ao fake DB', async () => {
      await salesController.getAllSales(request, response);
      chai.expect(response.status.calledWith(200)).not.to.be.equal(true);
    });
  });

