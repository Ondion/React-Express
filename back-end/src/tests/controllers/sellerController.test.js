const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const getAllSellersController = require('../../controllers/sellerController');
const sellerService = require('../../services/sellerService');

describe('Cases de teste para o getAllSellersController', () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(sellerService, 'getAllSellers').resolves(request.body);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testa o getAllSellersController', () => {
    it('Testa o retorno do getAllSellersController junto ao fake DB', async () => {
      await getAllSellersController.getAllSellersController(request, response);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

});
