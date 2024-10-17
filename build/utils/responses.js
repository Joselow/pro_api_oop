"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
const success = (res, status, data) => {
    res.status(status).json({
        success: true,
        data
    });
};
exports.success = success;
const error = (res, status, message, errors) => {
    res.status(status).json({
        success: false,
        message,
        errors
    });
};
exports.error = error;
