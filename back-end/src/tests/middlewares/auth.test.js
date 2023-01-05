const chai = require('chai');

const {  tokenGenerator, tokenValidator } = require('../../middlewares/auth');

const value = {
  payload: 'payload',
};

describe('token', () => {
  it('Token', () => {
    const token = tokenGenerator(value);
    chai.expect(token).to.be.string;

    const payload = tokenValidator(token);
    chai.expect(payload.payload).to.deep.equal('payload');
  });
});
