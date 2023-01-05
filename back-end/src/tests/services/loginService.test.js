const chai = require('chai');
const sinon = require('sinon');

const jwt = require('../../middlewares/auth');
const crypto = require('crypto');
const { User } = require('../../database/models');
const loginService = require('../../services/loginService'); 

describe('Test', () => {
  const users = {
    id: 'id', name: 'name', email: 'email', role: 'role',
  };

  afterEach(async () => {
    jwt.tokenGenerator.restore()
    User.findOne.restore()
  });

  it('test', async () => {
    sinon.stub(jwt, 'tokenGenerator').resolves(1)
    sinon.stub(User, 'findOne').resolves(users)
    const result = await loginService.getOneUser('teste', '123456');
    chai.expect(result.status).to.be.equal(200);
  });

  
  describe('teste', async () => {
    
    it('test', async () => {
      sinon.stub(jwt, 'tokenGenerator').resolves(1)
      sinon.stub(User, 'findOne').resolves(false)
      const result = await loginService.getOneUser('teste', '123456');
      chai.expect(result.status).to.be.equal(404);
    });
  });
});
