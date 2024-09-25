"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServer = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
class ConfigServer {
    constructor() {
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv_1.default.config({
            path: nodeNameEnv
        });
    }
    get nodeEnv() {
        return this.getEnviroment('NODE_ENV');
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
    get typeORMConfig() {
        return {
            type: 'mysql',
            host: this.getEnviroment('DB_HOST'),
            port: this.getNumberEnv('DB_PORT'),
            username: this.getEnviroment('DB_USERNAME'),
            password: this.getEnviroment('DB_PASSWORD'),
            database: this.getEnviroment('DB_DATABASE'),
            entities: [node_path_1.default.join(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
            migrations: [node_path_1.default.join(__dirname, '..', '..', 'migrations', '*{.ts, .js}')],
            synchronize: true,
            logging: false,
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        };
    }
}
exports.ConfigServer = ConfigServer;
