const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const registerController = require('../../controllers/registerController');
const registerService = require('../../services/registerService');

describe('Cases de teste para o registerController', () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    request.body = {
      name: 'Name Test',
      email: 'teste@teste.com.br',
      password: '123456',
    }

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(registerService, 'createUser').resolves(request.body);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testa o registerController', () => {
    it('Testa o retorno do registerController junto ao fake DB', async () => {
      await registerController.createUser(request, response);
      chai.expect(response.status.calledWith(200)).not.to.be.equal(true);
    });
  });

});
