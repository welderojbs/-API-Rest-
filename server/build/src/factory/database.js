"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const sessionFactory_1 = __importDefault(require("./sessionFactory"));
const pool = promise_mysql_1.default.createPool(sessionFactory_1.default.database);
//modulo de conexão para consultar
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB está Online');
});
exports.default = pool;
