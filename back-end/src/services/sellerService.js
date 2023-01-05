const { User } = require('../database/models');

async function getAllSellers() {
  return User.findAll({ where: { role: 'seller' } });
}

module.exports = {
  getAllSellers,
};
