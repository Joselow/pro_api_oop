"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../service/userService");
class UserController {
    constructor(userService = new userService_1.UserService()) {
        this.userService = userService;
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getUsers();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({
                    message: 'algo salió mal',
                    success: false
                });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deleted = yield this.userService.getUserById(id);
                res.status(200).json(deleted);
            }
            catch (error) {
                res.status(500).json({
                    message: 'algo salió mal',
                    success: false
                });
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { name, lastName, email, password, city, province } = req.body
            try {
                const user = yield this.userService.createUser(req.body);
                res.status(200).json(user);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    message: 'algo salió mal',
                    success: false
                });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield this.userService.updateUser(id, req.body);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({
                    message: 'algo salió mal',
                    success: false
                });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const users = yield this.userService.deleteUser(id);
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({
                    message: 'algo salió mal',
                    success: false
                });
            }
        });
    }
}
exports.UserController = UserController;
