const chai = require('chai');
const sinon = require('sinon');

const registerService = require('../../services/registerService');
const { User } = require('../../database/models');

describe('teste', async () => {
  it('teste', async () => {
    const result = await registerService.createUser('name', 'email', 'password');
    chai.expect(result).to.exist
    chai.expect(result.status).to.be.deep.equal(201);
  });

  it('teste', async () => {
    User.findOne.restore();
    sinon.stub(User, 'findOne').resolves(true);
    const result = await registerService.createUser('name', 'email', 'password');
    chai.expect(result).to.exist
    chai.expect(result.status).to.be.deep.equal(409);
  });
});
