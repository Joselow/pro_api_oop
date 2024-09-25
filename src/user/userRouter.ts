import { UserController } from "./controllers/userController";
import { BaseRouter } from "../router/router";

export class UserRouter extends BaseRouter<UserController>{
  constructor () {
    super(UserController);
  }

  public routes() {
    this.router.get('/user', (req, res) => this.controller.getUser(req, res));
  }
}
