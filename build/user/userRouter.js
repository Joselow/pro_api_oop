"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const userController_1 = require("./controllers/userController");
const router_1 = require("../router/router");
class UserRouter extends router_1.BaseRouter {
    constructor() {
        super(userController_1.UserController);
    }
    routes() {
        this.router.get('/users', (req, res, next) => this.controller.getUsers(req, res, next));
        this.router.get('/users/:id', (req, res, next) => this.controller.getUserById(req, res, next));
        this.router.post('/users', (req, res, next) => this.controller.createUser(req, res, next));
        this.router.put('/users/:id', (req, res, next) => this.controller.updateUser(req, res, next));
        this.router.delete('/users/:id', (req, res, next) => this.controller.deleteUser(req, res, next));
    }
}
exports.UserRouter = UserRouter;
