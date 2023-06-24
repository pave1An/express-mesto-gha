class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    this.message = message || 'Попытка создать дубликат уникального поля';
  }
}

module.exports = ConflictError;
