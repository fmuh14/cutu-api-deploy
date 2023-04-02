"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Address_1 = require("../entity/Address");
var Kecamatan_1 = require("../entity/Kecamatan");
var Kelurahan_1 = require("../entity/Kelurahan");
var Paket_1 = require("../entity/Paket");
var User_1 = require("../entity/User");
var Kurir_1 = require("../entity/Kurir");
require("dotenv/config");
var Transaksi_1 = require("../entity/Transaksi");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Address_1.Address, Kecamatan_1.Kecamatan, Kelurahan_1.Kelurahan, Paket_1.Paket, Kurir_1.Kurir, Transaksi_1.Transaksi],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map