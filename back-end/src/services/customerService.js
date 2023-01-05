const { Sale } = require('../database/models');

async function findOne(id) {
  const dbResult = await Sale.findByPk(id);
  return dbResult;
}

module.exports = {
  findOne,
};
