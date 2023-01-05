const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const errorHandle = require('../../middlewares/errorHandle');

describe('Cases de teste para o loginController', () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', () => {
      // chai.expect(() => authHandle(request, response)).to.throw('no token!');
      const teste = errorHandle(Error, request, response, () => {})
      chai.expect(response.status.calledWith(500)).to.be.equal(true);
    });
  });

});
