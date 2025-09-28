import { body } from "express-validator";

const createProductValidator = () => {
  return [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("description").trim().optional(),
    body("price")
      .notEmpty()
      .withMessage("Price is required")
      .isNumeric()
      .withMessage("Price must be a number"),

    body("stock")
      .notEmpty()
      .withMessage("Stock is required")
      .isNumeric()
      .withMessage("Stock must be a number"),
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
