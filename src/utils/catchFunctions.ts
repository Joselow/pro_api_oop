import { NextFunction, Request, Response } from "express";

export const catchFunctions = (fn: (req: Request, res: Response) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res).catch((err: unknown) => {    
      console.error(err)  
      next(err)
    });
  };
};