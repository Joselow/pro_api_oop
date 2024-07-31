import type { Response, Request } from "express";

export class UserController {
  getUser(req: Request, res: Response) {
    res.status(200).json({ 
      user: 'johsep@gmail.com' 
    })
  }
}