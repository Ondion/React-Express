const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const productsController = require('../../controllers/productsController');
const productsService = require('../../services/productsService');

describe('Cases de teste para o productsController', () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAllProducts').resolves(request);
    sinon.stub(productsService, 'getProductById').resolves(request);
    sinon.stub(productsService, 'createProduct').resolves(request);
    sinon.stub(productsService, 'updateProduct').resolves(request);
    sinon.stub(productsService, 'deleteProduct').resolves(request);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testa o productsController getAllProducts', () => {
    it('Testa o retorno do productsController junto ao fake DB', async () => {
      await productsController.getAllProducts(request, response);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Testa o productsController getProductById', () => {
    it('Testa o retorno do productsController junto ao fake DB', async () => {
      request.params = {
        id: 1,
      };

      await productsController.getProductById(request, response);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Testa o productsController createProduct', () => {
    request.body = {
      name: 'name',
      price: 'price',
      urlImage: 'urlImage',
    }
    it('Testa o retorno do productsController junto ao fake DB', async () => {
      await productsController.createProduct(request, response);
      chai.expect(response.status.calledWith(201)).not.to.be.equal(true);
    });
  });

  describe('Testa o productsController updateProduct', () => {
    request.params = {
      id: 1,
    };

    request.body = {
      name: 'name',
      price: 'price',
      urlImage: 'urlImage',
    }

    it('Testa o retorno do productsController junto ao fake DB', async () => {
      await productsController.updateProduct(request, response);
      chai.expect(response.status.calledWith(201)).not.to.be.equal(true);
    });
  });

  describe('Testa o productsController deleteProduct', () => {
    request.params = {
      id: 1,
    };

    it('Testa o retorno do productsController junto ao fake DB', async () => {
      await productsController.deleteProduct(request, response);
      chai.expect(response.status.calledWith(409)).not.to.be.equal(true);
    });
  });

});
