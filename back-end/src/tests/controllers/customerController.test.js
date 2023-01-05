const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const customerService = require('../../services/customerService');
const { request } = require('chai');

const mockDB = {
  id: 'teste',
  result: 'teste',
}


describe('Cases de teste para o customerController', () => {
  beforeEach(() => {
    sinon.stub(customerService, 'findOne').resolves(mockDB);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testa o controller', () => {
    it('Testa o retorno do controller junto ao fake DB', async () => {
      const response = await chai.request(app).get('/customer/1');
      chai.expect(response.status).to.be.equal(200);
      chai.expect(response.body).to.deep.equal(mockDB);
    });
  });

});
