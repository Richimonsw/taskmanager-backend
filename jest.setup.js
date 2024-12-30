jest.mock("./src/middleware/authMiddleware", () => (req, res, next) => {
  req.user = { id: "1", username: "testuser" }; // Usuario simulado
  next();
});
