"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = require("./database");
require("express-async-errors");
var routes_1 = require("./routes");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("../swagger.json"));
var appErrorMiddleware_1 = require("./middleware/appErrorMiddleware");
var app = (0, express_1.default)();
var cors = require("cors");
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
app.use(cors());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(appErrorMiddleware_1.appErrorMiddleware);
database_1.AppDataSource.initialize()
    .then(function () {
    console.log("DB test initialized");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization", err);
});
app.listen(process.env.PORT || 9000, function () { return console.log("rodando liso"); });
exports.default = app;
