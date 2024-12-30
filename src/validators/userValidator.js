const { body } = require("express-validator");

const userValidationRules = [
  body("username")
    .notEmpty()
    .withMessage("El nombre de usuario es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre de usuario debe tener al menos 3 caracteres"),
  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria"),
];

module.exports = userValidationRules;
