const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

  beforeEach(() => {
    sinon.stub(queryInterface, 'bulkInsert').resolves();
    sinon.stub(queryInterface, 'bulkDelete').resolves();
  });


const userSeeders = require('../../../database/seeders/20220921194420-user');

describe('Cases de teste para o loginController', () => {
  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(userSeeders.up).to.exist;
      chai.expect(typeof userSeeders.up).to.be.equal('function');
      chai.expect(await userSeeders.up('', {})).to.be.call;
    });
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(userSeeders.down).to.exist;
      chai.expect(typeof userSeeders.down).to.be.equal('function');
      chai.expect(await userSeeders.down('', {})).to.be.call;
    });
  });

});
