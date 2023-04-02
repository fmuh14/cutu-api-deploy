"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaksi = void 0;
var typeorm_1 = require("typeorm");
var Address_1 = require("./Address");
var Kurir_1 = require("./Kurir");
var Paket_1 = require("./Paket");
var User_1 = require("./User");
var Transaksi = /** @class */ (function () {
    function Transaksi() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Transaksi.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Transaksi.prototype, "tanggal_pemesanan", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transaksi.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Transaksi.prototype, "status_bayar", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transaksi.prototype, "metode_pemesanan", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transaksi.prototype, "metode_pembayaran", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Transaksi.prototype, "ongkir", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Transaksi.prototype, "total_harga", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transaksi.prototype, "invoice_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.transaksi; }),
        (0, typeorm_1.JoinColumn)({
            name: "user_id",
            foreignKeyConstraintName: "fk_transaksi_user_id"
        }),
        __metadata("design:type", User_1.User
        //Many to one relation
        )
    ], Transaksi.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Address_1.Address; }, function (address) { return address.transaksi; }),
        (0, typeorm_1.JoinColumn)({
            name: "address_id",
            foreignKeyConstraintName: "fk_transaksi_address_id"
        }),
        __metadata("design:type", Address_1.Address
        //Many to one relation
        )
    ], Transaksi.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Paket_1.Paket; }, function (paket) { return paket.transaksi; }),
        (0, typeorm_1.JoinColumn)({
            name: "paket_id",
            foreignKeyConstraintName: "fk_transaksi_paket_id"
        }),
        __metadata("design:type", Paket_1.Paket
        //Many to one relation
        )
    ], Transaksi.prototype, "paket", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Kurir_1.Kurir; }, function (kurir) { return kurir.transaksi; }),
        (0, typeorm_1.JoinColumn)({
            name: "kurir_id",
            foreignKeyConstraintName: "fk_transaksi_kurir_id"
        }),
        __metadata("design:type", Kurir_1.Kurir)
    ], Transaksi.prototype, "kurir", void 0);
    Transaksi = __decorate([
        (0, typeorm_1.Entity)()
    ], Transaksi);
    return Transaksi;
}());
exports.Transaksi = Transaksi;
//# sourceMappingURL=Transaksi.js.map