const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const loginController = require('../../controllers/loginController');
const loginService = require('../../services/loginService');

describe('Cases de teste para o loginController', () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    request.body = {
      email: 'teste@teste.com.br',
      password: '123456',
    }

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(loginService, 'getOneUser').resolves(request.body);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      await loginController.getOneUser(request, response);
      chai.expect(response.status.calledWith(200)).not.to.be.equal(true);
    });
  });

});
