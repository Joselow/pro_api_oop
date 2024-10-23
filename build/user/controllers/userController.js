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
const userService_1 = require("../services/userService");
const catchFunctions_1 = require("../../utils/catchFunctions");
const responses_1 = require("../../utils/responses");
class UserController {
    constructor(userService = new userService_1.UserService()) {
        this.userService = userService;
        this.getUsers = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getUsers();
            (0, responses_1.success)(res, 200, users);
        }));
        this.getUserById = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleted = yield this.userService.getUserById(id);
            (0, responses_1.success)(res, 200, deleted);
        }));
        this.createUser = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.createUser(req.body);
            (0, responses_1.success)(res, 200, user);
        }));
        this.updateUser = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userService.updateUser(id, req.body);
            (0, responses_1.success)(res, 200, user);
        }));
        this.deleteUser = (0, catchFunctions_1.catchFunctions)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userService.deleteUser(id);
            (0, responses_1.success)(res, 200, user);
        }));
    }
}
exports.UserController = UserController;
