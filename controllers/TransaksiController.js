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
exports.TransaksiController = void 0;
var User_1 = require("../entity/User");
var data_source_1 = require("../config/data-source");
var Address_1 = require("../entity/Address");
var Transaksi_1 = require("../entity/Transaksi");
var Kurir_1 = require("../entity/Kurir");
var Paket_1 = require("../entity/Paket");
var nanoid_1 = require("nanoid");
var payment_gateway_1 = require("../utils/payment-gateway");
require("dotenv/config");
var TransaksiController = /** @class */ (function () {
    function TransaksiController() {
        this.transaksiRepository = data_source_1.AppDataSource.getRepository(Transaksi_1.Transaksi);
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        this.addressRepository = data_source_1.AppDataSource.getRepository(Address_1.Address);
        this.kurirRepository = data_source_1.AppDataSource.getRepository(Kurir_1.Kurir);
        this.PaketRepository = data_source_1.AppDataSource.getRepository(Paket_1.Paket);
    }
    TransaksiController.prototype.addTransaksi = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var user, paket, nanoid, transaksi, address, kurir, invoiceTransaksi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({
                            id: req.body.user_id,
                        })];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.PaketRepository.findOneBy({
                                id: req.body.paket_id
                            })];
                    case 2:
                        paket = _a.sent();
                        nanoid = (0, nanoid_1.customAlphabet)('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
                        transaksi = new Transaksi_1.Transaksi();
                        transaksi.id = nanoid();
                        transaksi.user = user;
                        transaksi.paket = paket;
                        transaksi.metode_pembayaran = req.body.metode_pembayaran;
                        transaksi.metode_pemesanan = req.body.metode_pemesanan;
                        if (!(transaksi.metode_pemesanan == "store")) return [3 /*break*/, 3];
                        transaksi.ongkir = 0;
                        transaksi.total_harga = transaksi.ongkir + paket.price;
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(transaksi.metode_pemesanan == "delivery")) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.addressRepository.findOneBy({
                                id: req.body.address_id
                            })];
                    case 4:
                        address = _a.sent();
                        if (!(transaksi.metode_pembayaran == "cash")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.kurirRepository.createQueryBuilder('kurir')
                                .select()
                                .where({
                                is_ready: 1,
                            })
                                .orderBy('RAND()')
                                .getOne()];
                    case 5:
                        kurir = _a.sent();
                        if (!!kurir) return [3 /*break*/, 6];
                        transaksi.status = "Menunggu Kurir";
                        return [3 /*break*/, 8];
                    case 6:
                        transaksi.kurir = kurir;
                        kurir.is_ready = false;
                        return [4 /*yield*/, this.kurirRepository.save(kurir)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        transaksi.address = address;
                        transaksi.ongkir = parseInt(req.body.ongkir);
                        transaksi.total_harga = transaksi.ongkir + paket.price;
                        _a.label = 9;
                    case 9:
                        if (!(transaksi.metode_pembayaran == "cash")) return [3 /*break*/, 11];
                        if (!transaksi.status) {
                            transaksi.status = "Diproses";
                        }
                        transaksi.status_bayar = false;
                        return [4 /*yield*/, this.transaksiRepository.save(transaksi)];
                    case 10:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                message: "Transaksi Diproses."
                            })];
                    case 11:
                        if (!(transaksi.metode_pembayaran == "invoice")) return [3 /*break*/, 14];
                        transaksi.status = "Menunggu Pembayaran";
                        transaksi.status_bayar = false;
                        return [4 /*yield*/, payment_gateway_1.invoice.createInvoice({
                                externalID: transaksi.id,
                                amount: transaksi.total_harga,
                                description: 'Invoice for Transaction #' + transaksi.id,
                                invoice_duration: 60,
                                items: [{
                                        name: 'Paket ' + paket.name,
                                        quantity: 1,
                                        price: transaksi.total_harga
                                    }]
                            })];
                    case 12:
                        invoiceTransaksi = _a.sent();
                        transaksi.invoice_id = invoiceTransaksi.id;
                        return [4 /*yield*/, this.transaksiRepository.save(transaksi)];
                    case 13:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                message: "Transaksi Diproses.",
                                invoice: invoiceTransaksi.invoice_url
                            })];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    TransaksiController.prototype.paymentCallback = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var callbackToken, paymentInfo, transaksi, kurir;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        callbackToken = req.get("x-callback-token");
                        console.log(callbackToken);
                        if (!(callbackToken === process.env.XENDIT_CALLBACKTOKEN)) return [3 /*break*/, 10];
                        res.status(200).send();
                        paymentInfo = req.body;
                        console.log(paymentInfo);
                        if (!(paymentInfo.status == "PAID")) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.transaksiRepository.findOneBy({
                                id: paymentInfo.external_id
                            })];
                    case 1:
                        transaksi = _a.sent();
                        return [4 /*yield*/, this.kurirRepository.createQueryBuilder('kurir')
                                .select()
                                .where({
                                is_ready: 1,
                            })
                                .orderBy('RAND()')
                                .getOne()];
                    case 2:
                        kurir = _a.sent();
                        if (!!kurir) return [3 /*break*/, 3];
                        transaksi.status = "Menunggu Kurir";
                        return [3 /*break*/, 5];
                    case 3:
                        transaksi.status = "Diproses";
                        transaksi.kurir = kurir;
                        kurir.is_ready = false;
                        return [4 /*yield*/, this.kurirRepository.save(kurir)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        transaksi.status_bayar = true;
                        return [4 /*yield*/, this.transaksiRepository.save(transaksi)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        if (!(paymentInfo.status == "EXPIRED")) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.transaksiRepository
                                .createQueryBuilder('transaksi')
                                .delete()
                                .from(Transaksi_1.Transaksi)
                                .where({
                                id: paymentInfo.external_id
                            })
                                .execute()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10: return [2 /*return*/, res.status(401).send()];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    TransaksiController.prototype.deleteTransaksi = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedTransaksi, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transaksiRepository.findOneBy({
                            id: req.body.transaksi_id
                        })];
                    case 1:
                        deletedTransaksi = _a.sent();
                        return [4 /*yield*/, payment_gateway_1.invoice.expireInvoice({
                                invoiceID: deletedTransaksi.invoice_id,
                            })];
                    case 2:
                        resp = _a.sent();
                        return [4 /*yield*/, this.transaksiRepository.remove(deletedTransaksi)];
                    case 3:
                        _a.sent();
                        res.status(200).send({
                            message: "Transaksi Dibatalkan.",
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TransaksiController.prototype.getAllTransaksi = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var transaksi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transaksiRepository.find()];
                    case 1:
                        transaksi = _a.sent();
                        res.status(200).send({
                            message: "Request berhasil",
                            transaksi: transaksi
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TransaksiController.prototype.getAllTransaksiByUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var transaksi, listTransaksi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transaksiRepository
                            .createQueryBuilder('transaksi')
                            .leftJoinAndSelect("transaksi.paket", "paket")
                            .where("transaksi.user_id = :id", {
                            id: req.params.user_id,
                        })
                            .orderBy("tanggal_pemesanan", "DESC")
                            .getMany()];
                    case 1:
                        transaksi = _a.sent();
                        listTransaksi = [];
                        transaksi.forEach(function (transaksi) {
                            var data = {
                                id: transaksi.id,
                                paket: transaksi.paket.name,
                                status: transaksi.status,
                                metode_pengerjaan: transaksi.metode_pemesanan
                            };
                            listTransaksi.push(data);
                        });
                        res.status(200).send(listTransaksi);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransaksiController.prototype.getTransaksi = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var transaksi, detailTransaksi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.transaksiRepository.findOne({
                            where: {
                                id: req.params.transaksi_id,
                            },
                            relations: {
                                user: true,
                                address: true,
                                paket: true,
                                kurir: true
                            }
                        })];
                    case 1:
                        transaksi = _a.sent();
                        detailTransaksi = {
                            id: transaksi.id,
                            tanggal_pemesanan: transaksi.tanggal_pemesanan.toLocaleString(),
                            status: transaksi.status,
                            metode_pemesanan: transaksi.metode_pemesanan,
                            metode_pembayaran: transaksi.metode_pembayaran,
                            ongkir: transaksi.ongkir,
                            total_harga: transaksi.total_harga,
                            nama_paket: transaksi.paket.name,
                            harga_paket: transaksi.paket.price,
                            nama: transaksi.user.name,
                            phone_number: transaksi.user.phone_number,
                            invoice: transaksi.invoice_id,
                        };
                        if (detailTransaksi.metode_pemesanan == "delivery") {
                            detailTransaksi.phone_number = transaksi.address.phone_number;
                            detailTransaksi.nama = transaksi.address.name;
                            detailTransaksi["address"] = "".concat(transaksi.address.address, ", Kelurahan ").concat(transaksi.address.kelurahan, ", ").concat(transaksi.address.kecamatan);
                            if (transaksi.kurir) {
                                detailTransaksi["nama_kurir"] = transaksi.kurir.name;
                                detailTransaksi["phone_number_kurir"] = transaksi.kurir.phone_number;
                            }
                        }
                        res.status(200).send(detailTransaksi);
                        return [2 /*return*/];
                }
            });
        });
    };
    TransaksiController.prototype.getInvoiceURL = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var invoice_id, invoiceDetail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        invoice_id = req.params.invoice_id;
                        return [4 /*yield*/, payment_gateway_1.invoice.getInvoice({
                                invoiceID: invoice_id,
                            })];
                    case 1:
                        invoiceDetail = _a.sent();
                        res.status(200).send({
                            invoice: invoiceDetail.invoice_url
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return TransaksiController;
}());
exports.TransaksiController = TransaksiController;
//# sourceMappingURL=TransaksiController.js.map