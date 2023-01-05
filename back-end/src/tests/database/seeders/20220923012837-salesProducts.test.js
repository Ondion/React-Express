const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

  beforeEach(() => {
    sinon.stub(queryInterface, 'bulkInsert').resolves();
    sinon.stub(queryInterface, 'bulkDelete').resolves();
  });


const salesProductsSeeders = require('../../../database/seeders/20220923012837-salesProducts');

describe('Cases de teste para o loginController', () => {
  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(salesProductsSeeders.up).to.exist;
      chai.expect(typeof salesProductsSeeders.up).to.be.equal('function');
      chai.expect(await salesProductsSeeders.up('', {})).to.be.call;
    });
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(salesProductsSeeders.down).to.exist;
      chai.expect(typeof salesProductsSeeders.down).to.be.equal('function');
      chai.expect(await salesProductsSeeders.down('', {})).to.be.call;
    });
  });

});
