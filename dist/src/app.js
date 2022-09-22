"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = require("./database");
var routes_1 = require("./routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
database_1.AppDataSource.initialize()
    .then(function () {
    console.log("DB teste_tecnico initialized");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
app.listen(process.env.PORT || 3000, function () { return console.log("rodando liso"); });
exports.default = app;
