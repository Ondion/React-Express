const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

  beforeEach(() => {
    sinon.stub(queryInterface, 'createTable').resolves();
    sinon.stub(queryInterface, 'dropTable').resolves();
  });


const userMigration = require('../../../database/migrations/20220921195726-users');

describe('Cases de teste para o loginController', () => {
  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(userMigration.up).to.exist;
      chai.expect(typeof userMigration.up).to.be.equal('function');
      chai.expect(await userMigration.up('', {})).to.be.call;
    });
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(userMigration.down).to.exist;
      chai.expect(typeof userMigration.down).to.be.equal('function');
      chai.expect(await userMigration.down('', {})).to.be.call;
    });
  });

});
