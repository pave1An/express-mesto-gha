class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'Передан несуществующий _id';
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
