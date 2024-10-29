import { NextFunction, Request, Response } from "express";
import { UserDTO } from "../dto/userDTO";
import { validate } from "class-validator";
import { mapErrors } from "../../utils/mapErrors";
import { ClientError } from "../../errors/ClientError";

export class UserMidleware {
  async userValidator (req: Request, res: Response, next: NextFunction) {
    const { name, lastName, email, password, city, 
      province, username, phoneNumber, role } = req.body

    const user = new UserDTO({ name, lastName, email, password, city, 
      province, username, phoneNumber, role })

    const errors = await validate(user)

    if (errors.length) {
      const error = new ClientError('The data provided is invalid', 400, mapErrors(errors));
      return next(error)
    } 
    
    req.body = user;

    next()
  }
}