const crypto = require('crypto');
const { User } = require('../database/models');
const jwt = require('../middlewares/auth');

async function createUser(name, email, password) {
  const passEncrypted = crypto.createHash('md5').update(password).digest('hex');
  const doesEmailExist = await User.findOne({ where: { email } });
  const doesNameExist = await User.findOne({ where: { name } });
  if (!doesEmailExist || !doesNameExist) {
    const user = await User.create({ name, email, password: passEncrypted, role: 'customer' });
    const { id, name: userName, email: userEmail, role } = user;
    const token = jwt.tokenGenerator({ data: { id, name: userName, email: userEmail, role } });
    return { status: 201, message: { id, name: userName, email: userEmail, role, token } };
  }
  return { status: 409, message: 'User conflicted' };
}

module.exports = {
  createUser,
};
