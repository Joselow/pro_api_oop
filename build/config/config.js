"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv_1.default.config({
            path: nodeNameEnv
        });
    }
    get nodeEnv() {
        var _a;
        return (_a = this.getEnviroment('NODE_ENV')) === null || _a === void 0 ? void 0 : _a.trim();
    }
    getEnviroment(k) {
        return process.env[k] || '';
    }
    getNumberEnv(k) {
        return Number(this.getEnviroment(k));
    }
    createPathEnv(path) {
        const arrEnv = ['env'];
        if (path) {
            arrEnv.unshift(path);
        }
        return `.${arrEnv.join('.')}`;
    }
}
exports.ConfigServer = ConfigServer;
