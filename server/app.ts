import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorHandler } from "./middlewares/error";

export const app = express();

const origin = process.env.ORIGIN;

// body parser
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: origin,
    methods: ["GET"],
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ heelo: "hey" });
});

//this is for the unkown routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Request ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorHandler);
