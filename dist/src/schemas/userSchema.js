"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginSchema = exports.userUpdateSchema = exports.userCreateSchema = void 0;
var yup = __importStar(require("yup"));
exports.userCreateSchema = yup.object().shape({
    name: yup.string().required().min(2).max(50),
    email: yup.string().email().required().max(50),
    password: yup.string().required().min(4).max(60),
    phone: yup.string().required().max(15),
});
exports.userUpdateSchema = yup.object().shape({
    name: yup.string().min(2).max(50),
    email: yup.string().email().max(50),
    password: yup.string().min(4).max(60),
    phone: yup.string().max(15)
});
exports.userLoginSchema = yup.object().shape({
    email: yup.string().email().max(50),
    password: yup.string().min(4).max(60),
});
