module.exports = function errorHandle(error, _request, response, _next) {
  return response.status(error.status || 500).json({ message: error.message });
};
