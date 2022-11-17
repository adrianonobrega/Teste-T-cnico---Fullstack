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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactUpdateController = exports.contactListOneController = exports.contactListController = exports.contactDeleteController = exports.contactCreateController = void 0;
var contactCreate_services_1 = require("../services/contact/contactCreate.services");
var contactList_services_1 = require("../services/contact/contactList.services");
var contactListOne_services_1 = require("../services/contact/contactListOne.services");
var contactUpdate_services_1 = require("../services/contact/contactUpdate.services");
var contactDelete_services_1 = require("../services/contact/contactDelete.services");
var contactCreateController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, _a, email, phone, name, contact;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                user_id = req.params.user_id;
                _a = req.body, email = _a.email, phone = _a.phone, name = _a.name;
                return [4 /*yield*/, (0, contactCreate_services_1.contactCreateServices)({ user_id: user_id, email: email, phone: phone, name: name })];
            case 1:
                contact = _b.sent();
                res.status(201).json(contact);
                return [2 /*return*/];
        }
    });
}); };
exports.contactCreateController = contactCreateController;
var contactDeleteController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, contact;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, contactDelete_services_1.contactDeleteService)(id)];
            case 1:
                contact = _a.sent();
                res.status(204).json(contact);
                return [2 /*return*/];
        }
    });
}); };
exports.contactDeleteController = contactDeleteController;
var contactListController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var contact;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, contactList_services_1.contactListService)()];
            case 1:
                contact = _a.sent();
                res.status(200).json(contact);
                return [2 /*return*/];
        }
    });
}); };
exports.contactListController = contactListController;
var contactListOneController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, contact;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user_id = req.params.user_id;
                return [4 /*yield*/, (0, contactListOne_services_1.contactListOneService)(user_id)];
            case 1:
                contact = _a.sent();
                res.status(200).json(contact);
                return [2 /*return*/];
        }
    });
}); };
exports.contactListOneController = contactListOneController;
var contactUpdateController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, email, phone, name, contact;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                _a = req.body, email = _a.email, phone = _a.phone, name = _a.name;
                return [4 /*yield*/, (0, contactUpdate_services_1.contactUpdateService)({ id: id, email: email, phone: phone, name: name })];
            case 1:
                contact = _b.sent();
                res.status(200).json(contact);
                return [2 /*return*/];
        }
    });
}); };
exports.contactUpdateController = contactUpdateController;
