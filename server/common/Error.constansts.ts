import { HTTP_STATUS_CODES } from "./http.constants";

interface IErrorType {
  statusCode: number;
  errorCode: string;
  message: string;
}
export enum ErrorCode {
  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
  REQUIRED_FIELDS_MISSING = "REQUIRED_FIELDS_MISSING",
  USER_ALREADY_EXIST = "USER_ALREADY_EXIST",
}

export const Errors: Record<ErrorCode, IErrorType> = {
  [ErrorCode.REQUIRED_FIELDS_MISSING]: {
    statusCode: HTTP_STATUS_CODES.BAD_REQUEST,
    errorCode: ErrorCode.REQUIRED_FIELDS_MISSING,
    message: "REquired Fields missing",
  },
  [ErrorCode.RESOURCE_NOT_FOUND]: {
    statusCode: HTTP_STATUS_CODES.BAD_REQUEST,
    errorCode: ErrorCode.RESOURCE_NOT_FOUND,
    message: "Resource Not Found",
  },
  [ErrorCode.USER_ALREADY_EXIST]: {
    statusCode: HTTP_STATUS_CODES.BAD_REQUEST,
    errorCode: ErrorCode.USER_ALREADY_EXIST,
    message: "User Already Exist",
  },
};
