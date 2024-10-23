import type { Response, Request, NextFunction } from "express";
import { UserService } from "../services/userService";
import { catchFunctions } from "../../utils/catchFunctions";
import { success } from "../../utils/responses";

export class UserController {
  constructor(
    private readonly userService: UserService = new UserService(),
  ) {}
  
  getUsers = catchFunctions(async (req: Request, res: Response) => {
    const users = await this.userService.getUsers()
    success(res, 200, users)
  })

  getUserById = catchFunctions(async (req: Request, res: Response) => {
    const { id } = req.params

    const deleted = await this.userService.getUserById(id)
    success(res, 200, deleted)
  })

  createUser = catchFunctions(async (req: Request, res: Response) => {
    const user = await this.userService.createUser(req.body)
    success(res, 200, user)
  })

  updateUser = catchFunctions(async (req: Request, res: Response) => {
    const { id } = req.params

    const user = await this.userService.updateUser(id, req.body)
    success(res, 200, user)
  })

  deleteUser = catchFunctions(async (req: Request, res: Response) => {
    const { id } = req.params

    const user = await this.userService.deleteUser(id)
    success(res, 200, user)
  })
}