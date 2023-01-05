const chai = require('chai');
const sinon = require('sinon');

const { User } = require('../../database/models');
const manageService = require('../../services/manageService'); 

describe('Test', () => {
  describe('test', async () => {
    sinon.stub(User, 'findAll').resolves([])
    it('test', async () => {
      const result = await manageService.getAllUser();
      chai.expect(result).to.be.an('array');
    });
  });

  describe('test', async () => {
    it('test', async () => {
      sinon.stub(User, 'destroy').resolves([])
      const result = await manageService.excludeUser(0);
      chai.expect(result).to.be.an('array');
    });
  });

  describe('test', async () => {
    it('test', async () => {
      sinon.stub(User, 'findOne').resolves(true)
      sinon.stub(User, 'create').resolves()
      const result = await manageService.createUser('name', 'email', 'pass', 'role');
      chai.expect(result).to.be.deep.equal(0);
      User.findOne.restore()
      User.create.restore()
    });

    it('test', async () => {
      sinon.stub(User, 'findOne').resolves(false)
      sinon.stub(User, 'create').resolves(0)
      const result = await manageService.createUser('name', 'email', 'pass', 'role');
      chai.expect(result).to.be.deep.equal(0);
    });
  });
});
