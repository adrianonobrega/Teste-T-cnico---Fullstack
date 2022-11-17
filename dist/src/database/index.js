"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
require('dotenv').config();
exports.AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "test" ? {
    type: "sqlite",
    database: "memory:",
    synchronize: true,
    entities: ["src/entities/*.ts"]
} :
    {
        type: "postgres",
        url: process.env.DB_URI,
        ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
        synchronize: false,
        logging: true,
        entities: process.env.NODE_ENV === "production" ? ["dist/src/entities/*.js"] : ["src/entities/*.ts"],
        migrations: process.env.NODE_ENV === "production" ? ["dist/src/migrations/*.js"] : ["src/migrations/*.ts"],
    });
