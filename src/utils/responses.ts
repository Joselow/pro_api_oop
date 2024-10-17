import { Response } from "express";

export const success = ( res: Response, status: number, data: any ) =>{
  res.status(status).json({
    success: true,
    data
  });
}

export const error = (res: Response, status: number, message: string, errors: any) => {
  res.status(status).json({
    success: false,
    message,
    errors
  });
}