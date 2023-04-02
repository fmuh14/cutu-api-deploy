"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var AddressController_1 = require("./controllers/AddressController");
var PaketController_1 = require("./controllers/PaketController");
var TransaksiController_1 = require("./controllers/TransaksiController");
var UserController_1 = require("./controllers/UserController");
exports.Routes = [{
        method: "post",
        route: "/api/signin",
        controller: UserController_1.UserController,
        action: "signin"
    },
    {
        method: "post",
        route: "/api/signup",
        controller: UserController_1.UserController,
        action: "signup"
    },
    {
        method: "get",
        route: "/api/paket",
        controller: PaketController_1.PaketController,
        action: "getPaket"
    },
    {
        method: "get",
        route: "/api/user/:user_id",
        controller: UserController_1.UserController,
        action: "getProfile"
    },
    {
        method: "post",
        route: "/api/user/:user_id/updatepassword",
        controller: UserController_1.UserController,
        action: "updatePassword"
    },
    {
        method: "post",
        route: "/api/user/:user_id/updateprofile",
        controller: UserController_1.UserController,
        action: "updateProfile"
    },
    {
        method: "get",
        route: "/api/user/:user_id/transaksi",
        controller: TransaksiController_1.TransaksiController,
        action: "getAllTransaksiByUser"
    },
    {
        method: "post",
        route: "/api/address",
        controller: AddressController_1.AddressController,
        action: "addAddress"
    },
    {
        method: "get",
        route: "/api/address/kecamatankelurahan",
        controller: AddressController_1.AddressController,
        action: "getKecamatanKelurahan"
    },
    {
        method: "post",
        route: "/api/address/update",
        controller: AddressController_1.AddressController,
        action: "updateAddress"
    },
    {
        method: "post",
        route: "/api/address/delete",
        controller: AddressController_1.AddressController,
        action: "deleteAddress"
    },
    {
        method: "get",
        route: "/api/address/id/:address_id",
        controller: AddressController_1.AddressController,
        action: "getAddressById"
    },
    {
        method: "get",
        route: "/api/address/:user_id",
        controller: AddressController_1.AddressController,
        action: "getAddress"
    },
    {
        method: "get",
        route: "/api/payment/:invoice_id/link",
        controller: TransaksiController_1.TransaksiController,
        action: "getInvoiceURL"
    },
    {
        method: "post",
        route: "/api/payment/callback",
        controller: TransaksiController_1.TransaksiController,
        action: "paymentCallback"
    },
    {
        method: "get",
        route: "/api/admin/transaksi",
        controller: TransaksiController_1.TransaksiController,
        action: "getAllTransaksi"
    },
    {
        method: "post",
        route: "/api/transaksi/delete",
        controller: TransaksiController_1.TransaksiController,
        action: "deleteTransaksi"
    },
    {
        method: "post",
        route: "/api/transaksi/add",
        controller: TransaksiController_1.TransaksiController,
        action: "addTransaksi"
    },
    {
        method: "get",
        route: "/api/transaksi/:transaksi_id",
        controller: TransaksiController_1.TransaksiController,
        action: "getTransaksi"
    },
];
//# sourceMappingURL=routes.js.map