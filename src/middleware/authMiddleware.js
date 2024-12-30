const jwt = require("jsonwebtoken");
const User = require("../model/User"); 

async function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    req.user = user; 
    next(); 
  } catch (err) {
    console.error("Error en la autenticación del token:", err);
    res.status(403).json({ message: "Token inválido" });
  }
}

module.exports = authenticateToken;
