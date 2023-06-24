class InternalError extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'На сервере произошла ошибка';
    this.statusCode = 500;
  }
}

module.exports = InternalError;
