import type { Response } from "express";

export class NetworkResponse {
  success ( res: Response, status: number, data: any ) {
    res.status(status).json({
      success: true,
      status,
      data
    });
  }

  error (res: Response, status: number, errors: any) {
    res.status(status).json({
      success: false,
      status,
      errors
    });
  }
}