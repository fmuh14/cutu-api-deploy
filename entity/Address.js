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
exports.Address = void 0;
var typeorm_1 = require("typeorm");
var Transaksi_1 = require("./Transaksi");
var User_1 = require("./User");
var Address = /** @class */ (function () {
    function Address() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Address.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Address.prototype, "label", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Address.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Address.prototype, "phone_number", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Address.prototype, "kecamatan", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Address.prototype, "kelurahan", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Address.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.address; }),
        (0, typeorm_1.JoinColumn)({
            name: "user_id",
            foreignKeyConstraintName: "fk_user_id"
        }),
        __metadata("design:type", User_1.User
        // //Many to one relation
        // @ManyToOne(() => Kecamatan, (kecamatan) => kecamatan.address)
        // @JoinColumn({
        //   name: "kecamatan_id",
        //   foreignKeyConstraintName: "fk_kecamatan_id"
        // })
        // kecamatan: Kecamatan
        // //Many to one relation
        // @ManyToOne(() => Kelurahan, (kelurahan) => kelurahan.address)
        // @JoinColumn({
        //   name: "kelurahan_id",
        //   foreignKeyConstraintName: "fk_kelurahan_id"
        // })
        // kelurahan: Kelurahan
        //One to Many relation
        )
    ], Address.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Transaksi_1.Transaksi; }, function (transaksi) { return transaksi.address; }),
        __metadata("design:type", Array)
    ], Address.prototype, "transaksi", void 0);
    Address = __decorate([
        (0, typeorm_1.Entity)()
    ], Address);
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=Address.js.map