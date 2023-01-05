const crypto = require('crypto');
const { User } = require('../database/models');
const jwt = require('../middlewares/auth');

// Faz a busca por usuário validando o email e senha
async function getOneUser(userEmail, password) {
  const passEncrypted = crypto.createHash('md5').update(password).digest('hex');
  const user = await User.findOne({ where: { email: userEmail, password: passEncrypted } });
  if (!user) return { status: 404, message: 'Not found' };
  const { id, name, email, role } = user;
  const token = jwt.tokenGenerator({ data: { id, name, email, role } });
  return { status: 200, message: { id, name, email, role, token } };
}

module.exports = {
  getOneUser,
};
