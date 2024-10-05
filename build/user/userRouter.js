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
        this.router.get('/users', (req, res) => this.controller.getUser(req, res));
        this.router.get('/users/:id', (req, res) => this.controller.getUserById(req, res));
        this.router.post('/users', (req, res) => this.controller.createUser(req, res));
        this.router.put('/users/:id', (req, res) => this.controller.updateUser(req, res));
        this.router.delete('/users/:id', (req, res) => this.controller.deleteUser(req, res));
    }
}
exports.UserRouter = UserRouter;
