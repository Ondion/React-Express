const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const manageController = require('../../controllers/manageController');
const manageService = require('../../services/manageService');

describe('Cases de teste para o manageController', () => {
  const request = {};
  const response = {};

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(manageService, 'getAllUser').resolves(request);
    sinon.stub(manageService, 'excludeUser').resolves(request);
    sinon.stub(manageService, 'createUser').resolves(1);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Testa o manageController getAllUser', () => {
    it('Testa o retorno do manageController junto ao fake DB', async () => {
      await manageController.getAllUser(request, response);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Testa o manageController excludeUser', () => {
    it('Testa o retorno do manageController junto ao fake DB', async () => {
      request.params = {
        id: 1,
      };

      await manageController.excludeUser(request, response);
      chai.expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('Testa o manageController createUser', () => {
    request.body = {
      name: 'name',
      email: 'email',
      password: 'password',
      role: 'role',
    }
    it('Testa o retorno do manageController junto ao fake DB', async () => {
      await manageController.createUser(request, response);
      chai.expect(response.status.calledWith(201)).to.be.equal(true);

      manageService.createUser.restore();
      sinon.stub(manageService, 'createUser').resolves(0);

      await manageController.createUser(request, response);
      chai.expect(response.status.calledWith(409)).to.be.equal(true);
    });
  });

});
