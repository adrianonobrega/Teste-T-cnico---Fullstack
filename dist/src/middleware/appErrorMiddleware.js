"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appErrorMiddleware = void 0;
var appError_1 = __importDefault(require("../errors/appError"));
var appErrorMiddleware = function (err, request, response, _) {
    if (err instanceof appError_1.default) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        message: "Internal Server Error",
    });
};
exports.appErrorMiddleware = appErrorMiddleware;
