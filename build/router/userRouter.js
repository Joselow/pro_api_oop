"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const userController_1 = require("../controllers/userController");
const router_1 = require("./router");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(userController_1.UserController);
    }
    routes() {
        this.router.get('/user', (req, res) => this.controller.getUser(req, res));
    }
}
exports.UserRouter = UserRouter;
