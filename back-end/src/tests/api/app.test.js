const { expect } = require('chai');

const app = require('../../api/server');

describe('Cases de tests para app.js', () => {
  it('Testa se a função mais básica existe', () => {
    expect(app).to.exist;
    expect(typeof app).to.be.equal('function');
  })
});
