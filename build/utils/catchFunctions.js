"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchFunctions = void 0;
const catchFunctions = (fn) => {
    return (req, res, next) => {
        fn(req, res).catch((err) => {
            next(err);
        });
    };
};
exports.catchFunctions = catchFunctions;
