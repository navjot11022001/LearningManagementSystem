import { NextFunction, Request, Response } from "express";
import AppError from "../utils/Errorhandler";

export const ErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";
  err.errorCode = err.ErrorCode || "Internal server error";
  err = new AppError(err);
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
