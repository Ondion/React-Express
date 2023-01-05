const { expect } = require('chai');

const app = require('../../api/app');

describe('Cases de tests para serve.js', () => {
  it('Testa se a função mais básica existe', () => {
    expect(app).to.exist;
    expect(typeof app).to.be.equal('function');
  })
});
