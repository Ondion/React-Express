const manageService = require('../services/manageService');

async function getAllUser(_request, response) {
  const result = await manageService.getAllUser();
  return response.status(200).json(result);
}

async function excludeUser(request, response) {
  const { id } = request.params;
  const result = await manageService.excludeUser(id);
  return response.status(200).json(result);
}

async function createUser(request, response) {
  const { name, email, password, role } = request.body;
  const result = await manageService.createUser(name, email, password, role);
  if (result) return response.status(201).json(result);
  if (!result) return response.status(409).json(result);
}

module.exports = {
  getAllUser,
  excludeUser,
  createUser,
};
