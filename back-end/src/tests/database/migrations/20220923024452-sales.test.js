const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

  beforeEach(() => {
    sinon.stub(queryInterface, 'createTable').resolves();
    sinon.stub(queryInterface, 'dropTable').resolves();
  });


const salesMigration = require('../../../database/migrations/20220923024452-sales');

describe('Cases de teste para o loginController', () => {
  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(salesMigration.up).to.exist;
      chai.expect(typeof salesMigration.up).to.be.equal('function');
      chai.expect(await salesMigration.up('', {})).to.be.call;
    });
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(salesMigration.down).to.exist;
      chai.expect(typeof salesMigration.down).to.be.equal('function');
      chai.expect(await salesMigration.down('', {})).to.be.call;
    });
  });

});
