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
        while (_) try {
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
exports.SignupController = void 0;
var User_1 = require("../entity/User");
var data_source_1 = require("../config/data-source");
var SignupController = /** @class */ (function () {
    function SignupController() {
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
    SignupController.prototype.signup = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var verifEmail, verifNohp, regularExpression, minPasswordofChars, maxPasswordofChars, verifPassword, nohp, minNumberofChars, maxNumberofChars, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({
                            email: req.body.email,
                        })];
                    case 1:
                        verifEmail = _a.sent();
                        if (verifEmail) {
                            return [2 /*return*/, res.status(401).send({
                                    message: "Email telah digunakan!"
                                })];
                        }
                        return [4 /*yield*/, this.userRepository.findOneBy({
                                phone_number: req.body.phone_number,
                            })];
                    case 2:
                        verifNohp = _a.sent();
                        if (verifNohp) {
                            return [2 /*return*/, res.status(401).send({
                                    message: "Nomor HP telah digunakan!"
                                })];
                        }
                        regularExpression = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                        minPasswordofChars = 8;
                        maxPasswordofChars = 16;
                        verifPassword = req.body.password;
                        if (verifPassword.length < minPasswordofChars || verifPassword.length > maxPasswordofChars) {
                            return [2 /*return*/, res.status(401).send({
                                    message: "Password minimal harus diantara 8-16 karakter"
                                })];
                        }
                        if (!regularExpression.test(verifPassword)) {
                            return [2 /*return*/, res.status(401).send({
                                    message: "Password harus memiliki angka"
                                })];
                        }
                        nohp = req.body.phone_number;
                        minNumberofChars = 8;
                        maxNumberofChars = 15;
                        if (nohp.length < minNumberofChars || nohp.length > maxNumberofChars) {
                            return [2 /*return*/, res.status(401).send({
                                    message: "Nohp"
                                })];
                        }
                        user = new User_1.User();
                        user.id = "TESTUSER-03";
                        user.name = req.body.name;
                        user.email = req.body.email;
                        user.password = req.body.password;
                        user.phone_number = req.body.phone_number;
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.status(200).send({
                                message: "Daftar Sukses"
                            })];
                }
            });
        });
    };
    return SignupController;
}());
exports.SignupController = SignupController;
//# sourceMappingURL=SignupController.js.map