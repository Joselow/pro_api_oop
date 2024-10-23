import { UserController } from "./controllers/userController";
import { BaseRouter } from "../router/router";

export class UserRouter extends BaseRouter<UserController>{
  constructor () {
    super(UserController)
  }

  public routes() {
    this.router.get('/users', (req, res, next) => this.controller.getUsers(req, res, next))    
    this.router.get('/users/:id', (req, res, next) => this.controller.getUserById(req, res, next))    
    this.router.post('/users', (req, res, next) => this.controller.createUser(req, res, next))    
    this.router.put('/users/:id', (req, res, next) => this.controller.updateUser(req, res, next))    
    this.router.delete('/users/:id', (req, res, next) => this.controller.deleteUser(req, res, next))    
  }
}
