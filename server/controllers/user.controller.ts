require("dotenv").confog();
import { Request, Response, NextFunction } from "express";
import userModel, { IUser } from "../models/UserModel";
import AppError from "../utils/Errorhandler";
import { CatchAsyncError } from "../middlewares/catchAsyncErro";
import { Errors } from "../common/Error.constansts";
import jwt, { Secret } from "jsonwebtoken";

interface IRegistrationBody {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export const registrationUser = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password)
        return next(new AppError(Errors.REQUIRED_FIELDS_MISSING));

      const isEmailExist = await userModel.findOne({ email });
      if (isEmailExist) {
        return next(new AppError(Errors.USER_ALREADY_EXIST));
      }

      const user: IRegistrationBody = {
        name,
        email,
        password,
      };
      const { activationCode, token } = createActivationToken(user);
    } catch (error: any) {
      return next(
        new AppError({
          message: error.message,
          statusCode: 400,
          errorCode: error.message,
        })
      );
    }
  }
);
interface IActivationToken {
  token: string;
  activationCode: string;
}

export const createActivationToken = (
  user: IRegistrationBody
): IActivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    {
      user,
      activationCode,
    },
    process.env.ACTIVATION_SECRET as Secret,
    {
      expiresIn: "5m",
    }
  );
  return { token, activationCode };
};
