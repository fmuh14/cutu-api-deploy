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
exports.Kecamatan = void 0;
var typeorm_1 = require("typeorm");
var Kelurahan_1 = require("./Kelurahan");
var Kecamatan = /** @class */ (function () {
    function Kecamatan() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Kecamatan.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Kecamatan.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Kelurahan_1.Kelurahan; }, function (kelurahan) { return kelurahan.kecamatan; }),
        __metadata("design:type", Array)
    ], Kecamatan.prototype, "kelurahan", void 0);
    Kecamatan = __decorate([
        (0, typeorm_1.Entity)()
    ], Kecamatan);
    return Kecamatan;
}());
exports.Kecamatan = Kecamatan;
//# sourceMappingURL=Kecamatan.js.map