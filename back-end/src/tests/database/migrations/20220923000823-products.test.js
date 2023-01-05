const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

  beforeEach(() => {
    sinon.stub(queryInterface, 'createTable').resolves();
    sinon.stub(queryInterface, 'dropTable').resolves();
  });


const productsMigration = require('../../../database/migrations/20220923000823-products');

describe('Cases de teste para o loginController', () => {
  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(productsMigration.up).to.exist;
      chai.expect(typeof productsMigration.up).to.be.equal('function');
      chai.expect(await productsMigration.up('', {})).to.be.call;
    });
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(productsMigration.down).to.exist;
      chai.expect(typeof productsMigration.down).to.be.equal('function');
      chai.expect(await productsMigration.down('', {})).to.be.call;
    });
  });

});
