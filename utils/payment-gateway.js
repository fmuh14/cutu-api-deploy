"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice = void 0;
var Xendit = require("xendit-node");
require("dotenv/config");
var x = new Xendit({
    secretKey: process.env.XENDIT_SECRETKEY,
});
var Invoice = x.Invoice;
var invoiceSpecificOptions = {};
exports.invoice = new Invoice(invoiceSpecificOptions);
//# sourceMappingURL=payment-gateway.js.map