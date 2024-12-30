function notFound(req, res, next) {
    res.status(404).json({
      error: {
        message: "Recurso no encontrado",
        status: 404,
      },
    });
  }
  
  module.exports = notFound;
  