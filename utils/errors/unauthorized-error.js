class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'Неверно указан логин или пароль';
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
