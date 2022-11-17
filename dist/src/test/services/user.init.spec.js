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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../../database");
var userCreate_services_1 = require("../../services/user/userCreate.services");
var uuid_1 = require("uuid");
var appError_1 = __importDefault(require("../../errors/appError"));
var userDelete_services_1 = require("../../services/user/userDelete.services");
var userLogin_services_1 = require("../../services/user/userLogin.services");
var userListOne_services_1 = require("../../services/user/userListOne.services");
var userUpdate_services_1 = require("../../services/user/userUpdate.services");
describe("Manipulate user", function () {
    var user = {
        name: "test",
        email: "test@gmail.com",
        password: "1234",
        phone: "(83)006454454"
    };
    var userUpdate = {
        id: "",
        name: "adri",
        email: "test@gmail.com",
        password: "1234",
        phone: "(83)006456654"
    };
    var loginData = {
        email: "test@gmail.com",
        password: "1234",
    };
    var connection;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_1.AppDataSource.initialize().then(function (res) {
                        connection = res;
                    }).catch(function (err) {
                        console.error("Error during Dara Source initialization", err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.destroy()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Should be able to create an user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var newUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userCreate_services_1.userCreateServices)(user)];
                case 1:
                    newUser = _a.sent();
                    userUpdate.id = newUser.id;
                    expect(newUser).toHaveProperty("id");
                    expect(newUser.name).toBe("test");
                    expect(newUser).not.toHaveProperty("password");
                    return [2 /*return*/];
            }
        });
    }); });
    test("Should be able to thown an error in case of user not found", function () { return __awaiter(void 0, void 0, void 0, function () {
        var user_id, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    user_id = (0, uuid_1.v4)();
                    return [4 /*yield*/, (0, userDelete_services_1.userDeleteService)(user_id)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    if (err_1 instanceof appError_1.default) {
                        expect(err_1.message).toBe("User not found");
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    test("Must be able to return a user by ID", function () { return __awaiter(void 0, void 0, void 0, function () {
        var listOneUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userListOne_services_1.userListOneService)(userUpdate.id)];
                case 1:
                    listOneUser = _a.sent();
                    expect(listOneUser).toHaveProperty("id");
                    expect(listOneUser.name).toBe("test");
                    expect(listOneUser).not.toHaveProperty("password");
                    return [2 /*return*/];
            }
        });
    }); });
    test("must be able to update a user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var listOneUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userUpdate_services_1.userUpdateService)(userUpdate)];
                case 1:
                    listOneUser = _a.sent();
                    expect(listOneUser).toHaveProperty("id");
                    expect(listOneUser.phone).toBe("(83)006456654");
                    expect(listOneUser).not.toHaveProperty("password");
                    return [2 /*return*/];
            }
        });
    }); });
    test("must be able to login a user", function () { return __awaiter(void 0, void 0, void 0, function () {
        var listOneUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, userLogin_services_1.userLoginServices)(loginData)];
                case 1:
                    listOneUser = _a.sent();
                    expect(listOneUser).toHaveProperty("token");
                    return [2 /*return*/];
            }
        });
    }); });
});
