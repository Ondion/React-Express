const chai = require('chai');
const db = require('../../database/models');

describe('teste', () => {
  it('teste', () => {
    chai.expect(db).to.exist;
    chai.expect(db).to.be.a('function');
  });
  
});
