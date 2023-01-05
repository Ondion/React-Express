const crypto = require('crypto');
const { Op } = require('sequelize');
const { User } = require('../database/models');

// Faz a busca por usuário validando o email e senha
async function getAllUser() {
  return User.findAll({
    where: {
      [Op.or]: [
        { role: 'seller' },
        { role: 'customer' },
      ],
    },
    attributes: { exclude: ['password'] },
  });
}

async function excludeUser(id) {
  return User.destroy({ where: { id } });
}

// Faz a busca por usuário validando o email e senha
async function createUser(name, email, pass, role) {
  const teste = await User.findOne({ where: { email } });
  if (!teste) {
    const password = crypto.createHash('md5').update(pass).digest('hex');
    const user = await User.create({ name, email, password, role });
    return user;
  }
  return 0;
}

module.exports = {
  getAllUser,
  excludeUser,
  createUser,
};
