const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

  beforeEach(() => {
    sinon.stub(queryInterface, 'createTable').resolves();
    sinon.stub(queryInterface, 'dropTable').resolves();
  });


const salesProductsMigration = require('../../../database/migrations/20220923031509-salesProducts');

describe('Cases de teste para o loginController', () => {
  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(salesProductsMigration.up).to.exist;
      chai.expect(typeof salesProductsMigration.up).to.be.equal('function');
      chai.expect(await salesProductsMigration.up('', {})).to.be.call;
    });
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(salesProductsMigration.down).to.exist;
      chai.expect(typeof salesProductsMigration.down).to.be.equal('function');
      chai.expect(await salesProductsMigration.down('', {})).to.be.call;
    });
  });

});
