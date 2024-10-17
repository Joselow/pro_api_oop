"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkResponse = void 0;
class NetworkResponse {
    success(res, status, data) {
        res.status(status).json({
            success: true,
            status,
            data
        });
    }
    error(res, status, errors) {
        res.status(status).json({
            success: false,
            status,
            errors
        });
    }
}
exports.NetworkResponse = NetworkResponse;
