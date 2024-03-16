import { validationResult } from "express-validator";
import { ValidationError } from "./api.error";
import { errorResponseProcessor } from "./response.processor";

export const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const error = new ValidationError(
      errors.array({
        onlyFirstError: true,
      })
    );

    errorResponseProcessor(res, error);
  };
};
