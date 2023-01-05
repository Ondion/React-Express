const loginService = require('../services/loginService');

async function getOneUser(request, response) {
  const { email, password } = request.body;
  const result = await loginService.getOneUser(email, password);
  return response.status(result.status).json(result.message);
}

module.exports = {
  getOneUser,
};
