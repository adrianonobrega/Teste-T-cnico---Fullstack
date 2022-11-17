"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
var authUser = function (req, res, next) {
    var _a;
    try {
        var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            req.userEmail = decoded.email;
            next();
        });
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};
exports.authUser = authUser;
