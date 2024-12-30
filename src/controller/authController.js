const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/User"); // Modelo de usuario

class AuthController {
  async register(req, res) {
    try {
      const { username, password } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ username, password: hashedPassword });

      res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Error al registrar usuario", error });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: "1h", 
      });

      res.status(200).json({ message: "Login exitoso", user, token });
    } catch (error) {
      res.status(500).json({ message: "Error al iniciar sesión", error });
    }
  }
}

module.exports = new AuthController();
