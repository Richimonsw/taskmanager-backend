const { body } = require("express-validator");

const taskValidationRules = [
  body("title")
    .notEmpty()
    .withMessage("El título es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El título debe tener al menos 3 caracteres"),
  body("description")
    .isString()
    .withMessage("La descripción debe ser un texto"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("El campo completed debe ser un booleano"),
];

module.exports = taskValidationRules;
