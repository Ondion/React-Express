const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const auth = require('../../middlewares/auth')

chai.use(chaiHttp);

const authHandle = require('../../middlewares/authHandle');

describe('Cases de teste para o loginController', () => {
  const request = {
    headers: {
      authorization: 1
    },
  };
  const response = {};

  beforeEach(() => {
    sinon.stub(auth, 'tokenValidator').returns(true);
    response.status = sinon.stub().returns();
    response.json = sinon.stub().returns();
  });

  afterEach(() => {
    sinon.restore();
  });

 
  it('Testa o retorno do loginController junto ao fake DB', () => {
    chai.expect(authHandle(request, response, () => {})).to.be.undefined
    chai.expect(authHandle(request, response, () => {})).to.all
    chai.expect(() => authHandle({}, response, () => {})).to.throw('no token!');
  });

});
