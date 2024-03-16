import { Request, Response, NextFunction } from "express";
import { SuccessResponse } from "./success.response";
import { ApiError } from "./api.error";

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<SuccessResponse>;

export const errorResponseProcessor = (res: Response, error: Error) => {
  if (error instanceof ApiError) {
    return res.status(error.status).json({
      message: error.message,
      data: error.errors,
    });
  }
  res.status(400).json({
    data: {},
    message: error.message,
  });
};

export const responseProcessor = (fn: AsyncFunction) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next))
      .then((response: SuccessResponse) => {
        return res.status(response.statusCode).send({
          message: response.message,
          data: response.data,
        });
      })
      .catch((error) => {
        return errorResponseProcessor(res, error);
      });
  };
};
