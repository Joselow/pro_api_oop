import type { Response, Request } from "express";
import { UserService } from "../service/userService";

export class UserController {
  constructor(
    private readonly userService: UserService = new UserService()
  ) {}

  async getUser(req: Request, res: Response) {
    try {
      const users = await this.userService.getUsers()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({
        message: 'algo salió mal',
        success: false
      })
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params

    try {
      const deleted = await this.userService.getUserById(id)
      res.status(200).json(deleted)
    } catch (error) {
      res.status(500).json({
        message: 'algo salió mal',
        success: false
      })
    }
  }

  province!: string
  async createUser(req: Request, res: Response) {
    // const { name, lastName, email, password, city, province } = req.body
    try {
      const user = await this.userService.createUser(req.body)
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: 'algo salió mal',
        success: false
      })
    }
  }
  async updateUser(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await this.userService.updateUser(id, req.body)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({
        message: 'algo salió mal',
        success: false
      })
    }
  }
  async deleteUser(req: Request, res: Response) {
    const { id } = req.params
    try {
      const users = await this.userService.deleteUser(id)
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({
        message: 'algo salió mal',
        success: false
      })
    }
  }
}