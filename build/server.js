"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const userRouter_1 = require("./router/userRouter");
const config_1 = require("./config/config");
class ServerBootstrap extends config_1.ConfigServer {
    constructor() {
        super();
        this.app = (0, express_1.default)();
        this.port = this.getNumberEnv('PORT');
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use('/api', this.routes());
        this.listen();
    }
    routes() {
        return [
            new userRouter_1.UserRouter().router
        ];
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening on http://localhost:${this.port}`);
        });
    }
}
new ServerBootstrap();
