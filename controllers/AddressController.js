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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.AddressController = void 0;
var User_1 = require("../entity/User");
var data_source_1 = require("../config/data-source");
var Address_1 = require("../entity/Address");
var Kecamatan_1 = require("../entity/Kecamatan");
var Kelurahan_1 = require("../entity/Kelurahan");
var AddressController = /** @class */ (function () {
    function AddressController() {
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        this.addressRepository = data_source_1.AppDataSource.getRepository(Address_1.Address);
        this.kecamatanRepository = data_source_1.AppDataSource.getRepository(Kecamatan_1.Kecamatan);
        this.kelurahanRepository = data_source_1.AppDataSource.getRepository(Kelurahan_1.Kelurahan);
    }
    AddressController.prototype.addAddress = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({
                            id: req.body.user_id,
                        })];
                    case 1:
                        user = _a.sent();
                        address = new Address_1.Address();
                        address.user = user;
                        address.label = req.body.label;
                        address.name = req.body.name;
                        address.phone_number = req.body.phone_number;
                        address.kelurahan = req.body.kelurahan;
                        address.kecamatan = req.body.kecamatan;
                        address.address = req.body.address;
                        return [4 /*yield*/, this.addressRepository.save(address)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                message: "Address Berhasil Ditambahkan."
                            })];
                }
            });
        });
    };
    AddressController.prototype.getAddress = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: {
                                id: req.params.user_id,
                            },
                            relations: {
                                address: true,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        address = user.address;
                        // if (address.length == 0) {
                        //   return res.status(401).send({
                        //     message: "Anda belum memiliki Alamat, silahkan tambahkan alamat!"
                        //   });
                        // }
                        return [2 /*return*/, res.status(200).send(address)];
                }
            });
        });
    };
    AddressController.prototype.getKecamatanKelurahan = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var kecamatan, kelurahan;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.kecamatanRepository.find({
                            order: {
                                name: "ASC",
                            }
                        })];
                    case 1:
                        kecamatan = _a.sent();
                        return [4 /*yield*/, this.kelurahanRepository.find({
                                order: {
                                    kecamatan_id: "ASC",
                                }
                            })];
                    case 2:
                        kelurahan = _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                kecamatan: kecamatan,
                                kelurahan: kelurahan
                            })];
                }
            });
        });
    };
    AddressController.prototype.getAddressById = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addressRepository.findOneBy({
                            id: req.params.address_id,
                        })];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, res.status(200).send(address)];
                }
            });
        });
    };
    AddressController.prototype.updateAddress = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addressRepository.findOneBy({
                            id: req.body.address_id
                        })];
                    case 1:
                        address = _a.sent();
                        address.label = req.body.label;
                        address.name = req.body.name;
                        address.phone_number = req.body.phone_number;
                        address.kecamatan = req.body.kecamatan;
                        address.kelurahan = req.body.kelurahan;
                        address.address = req.body.address;
                        return [4 /*yield*/, this.addressRepository.save(address)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                message: "Alamat Berhasil Diubah."
                            })];
                }
            });
        });
    };
    AddressController.prototype.deleteAddress = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addressRepository.findOneBy({
                            id: req.body.address_id
                        })];
                    case 1:
                        address = _a.sent();
                        return [4 /*yield*/, this.addressRepository.remove(address)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                message: "Alamat Berhasil Dihapus."
                            })];
                }
            });
        });
    };
    return AddressController;
}());
exports.AddressController = AddressController;
//# sourceMappingURL=AddressController.js.map