import { NextFunction, Request, Response } from "express";

export const CatchAsyncError =
  (theFunciton: any) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(theFunciton(req, res, next)).catch(next);
