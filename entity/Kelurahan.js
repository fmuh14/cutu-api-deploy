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
exports.Kelurahan = void 0;
var typeorm_1 = require("typeorm");
var Kecamatan_1 = require("./Kecamatan");
var Kelurahan = /** @class */ (function () {
    function Kelurahan() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Kelurahan.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Kelurahan.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ insert: false }),
        __metadata("design:type", String)
    ], Kelurahan.prototype, "kecamatan_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Kecamatan_1.Kecamatan; }, function (kecamatan) { return kecamatan.kelurahan; }),
        (0, typeorm_1.JoinColumn)({
            name: "kecamatan_id",
            foreignKeyConstraintName: "fk_kecamatan_id"
        }),
        __metadata("design:type", Kecamatan_1.Kecamatan
        // //One to Many relation
        // @OneToMany(() => Address, (address) => address.kelurahan)
        // address: Address[]
        )
    ], Kelurahan.prototype, "kecamatan", void 0);
    Kelurahan = __decorate([
        (0, typeorm_1.Entity)()
    ], Kelurahan);
    return Kelurahan;
}());
exports.Kelurahan = Kelurahan;
//# sourceMappingURL=Kelurahan.js.map