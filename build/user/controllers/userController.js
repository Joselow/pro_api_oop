"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    getUser(req, res) {
        res.status(200).json({
            user: 'johsep@gmail.com'
        });
    }
}
exports.UserController = UserController;
