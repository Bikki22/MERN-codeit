import { body } from "express-validator";

const createProductValidator = () => {
  return [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("description")
      .trim()
      .optional()
      .withMessage("description is required"),
    body("price")
      .trim()
      .isNumeric()
      .withMessage("Price must be number")
      .notEmpty()
      .withMessage("Price is required"),
    body("stock")
      .trim()
      .isNumeric()
      .withMessage("Stock must be a number")
      .notEmpty()
      .withMessage("Stock is required"),
  ];
};

const updateProductValidator = () => {
  return [
    body("name").optional().trim().notEmpty().withMessage("Name is required"),
    body("description")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("description is required"),
    body("price")
      .optional()
      .trim()
      .isNumeric()
      .withMessage("Price must be number")
      .notEmpty()
      .withMessage("Price is required"),
    body("stock")
      .optional()
      .trim()
      .isNumeric()
      .withMessage("Stock must be a number")
      .notEmpty()
      .withMessage("Stock is required"),
  ];
};

export { createProductValidator, updateProductValidator };
