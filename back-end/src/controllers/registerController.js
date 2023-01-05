const loginService = require('../services/registerService');

async function createUser(request, response) {
  const { name, email, password } = request.body;
  const result = await loginService.createUser(name, email, password);
  return response.status(result.status).json(result.message);
}

module.exports = {
  createUser,
};
