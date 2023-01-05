const chai = require('chai');
const sinon = require('sinon');

const { User } = require('../../database/models');
const sellerService = require('../../services/sellerService');

describe('teste', async () => {
  it('teste', async () => {
    sinon.stub(User, 'findAll').resolves(1)
    const result = await sellerService.getAllSellers();
    chai.expect(result).to.be.deep.equal(1);
  });
});
