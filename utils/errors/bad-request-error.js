class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'Переданы некорректные данные запроса';
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
