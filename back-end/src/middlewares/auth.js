const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const SECRET = readFileSync('jwt.evaluation.key', 'utf-8') || 'secret_key';

function tokenGenerator(payload) {
  return jwt.sign(payload, SECRET, {
    expiresIn: '365d',
    algorithm: 'HS256',
  });
}

function tokenValidator(token) {
  return jwt.verify(token, SECRET, { algorithms: 'HS256' });
}

module.exports = {
  tokenGenerator,
  tokenValidator,
};
