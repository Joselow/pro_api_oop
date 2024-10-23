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
exports.dbConnect = exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("./config");
const configServer = new config_1.ConfigServer();
exports.dataSource = new typeorm_1.DataSource(configServer.typeORMConfig);
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!exports.dataSource.isInitialized) {
        try {
            console.log('inicializando');
            yield exports.dataSource.initialize();
            console.log("Database connection established successfully.");
        }
        catch (error) {
            console.error("Error establishing database connection:", error);
            throw new Error("Error establishing database connection");
        }
    }
    return exports.dataSource;
});
exports.dbConnect = dbConnect;
