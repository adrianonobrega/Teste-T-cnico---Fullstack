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
        host: "localhost",
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        port: 5432,
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
    });
