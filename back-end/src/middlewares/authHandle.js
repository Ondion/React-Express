const auth = require('./auth');

function tokenValidate(request, _response, next) {
  try {
    const token = request.headers.authorization;
    if (auth.tokenValidator(token)) next();
  } catch (error) {
    error.status = 400;
    error.message = 'no token!';
    throw error;
  }
}

module.exports = tokenValidate;
