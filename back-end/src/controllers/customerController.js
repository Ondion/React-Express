const customerService = require('../services/customerService');

async function findOne(request, response) {
  const { id } = request.params;
  const dbResult = await customerService.findOne(id);
  return response.status(200).json(dbResult);
}

module.exports = {
  findOne,
};
