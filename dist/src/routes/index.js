"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var user_1 = require("./user");
var contact_1 = require("./contact");
exports.router = (0, express_1.Router)();
exports.router.use("/users", user_1.userRoutes);
exports.router.use("/contacts", contact_1.contactRoutes);
