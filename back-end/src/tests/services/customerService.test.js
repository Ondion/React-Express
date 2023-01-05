const chai = require('chai');
const sinon = require('sinon');

const { Sale } = require('../../database/models');
const customerService = require('../../services/customerService'); 

describe('Test', () => {
  const produtcs = [];

  beforeEach(async () => {
    sinon.stub(Sale, 'findByPk').resolves(produtcs)
  });

  afterEach(() =>
  Sale.findByPk.restore()
  );

  it('test', async () => {
    const result = await customerService.findOne(1);
    chai.expect(result).to.be.an('array');
  });
});
