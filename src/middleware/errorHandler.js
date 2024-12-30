
function errorHandler(err, req, res, next) {
    console.error(err.stack);
  
    const status = err.status || 500;
  
    res.status(status).json({
      error: {
        message: err.message || "Ocurrió un error interno del servidor",
        status,
      },
    });
  }
  
  module.exports = errorHandler;
  