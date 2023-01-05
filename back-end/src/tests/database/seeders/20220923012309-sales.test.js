const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

  beforeEach(() => {
    sinon.stub(queryInterface, 'bulkInsert').resolves();
    sinon.stub(queryInterface, 'bulkDelete').resolves();
  });


const productsSeeders = require('../../../database/seeders/20220923002218-products');

describe('Cases de teste para o loginController', () => {
  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(productsSeeders.up).to.exist;
      chai.expect(typeof productsSeeders.up).to.be.equal('function');
      chai.expect(await productsSeeders.up('', {})).to.be.call;
    });
  });

  describe('Testa o loginController', () => {
    it('Testa o retorno do loginController junto ao fake DB', async () => {
      chai.expect(productsSeeders.down).to.exist;
      chai.expect(typeof productsSeeders.down).to.be.equal('function');
      chai.expect(await productsSeeders.down('', {})).to.be.call;
    });
  });

});
