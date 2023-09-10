interface IErrorType {
  message: string;
  errorCode: string;
  statusCode: Number;
}
type ICustomMessage = { customMessage?: string };

class AppError extends Error {
  errorCode: string;
  statusCode: Number;
  constructor(error: IErrorType, { customMessage }: ICustomMessage = {}) {
    super();
    this.message = error.message;
    this.errorCode = error.errorCode;
    this.statusCode = error.statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
