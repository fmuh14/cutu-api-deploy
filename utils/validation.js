"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhoneNumber = exports.validatePasswordLength = exports.validatePassword = exports.validateEmail = void 0;
function validateEmail(email) {
    return !email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
exports.validateEmail = validateEmail;
function validatePassword(password) {
    return !password.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/);
}
exports.validatePassword = validatePassword;
function validatePasswordLength(password) {
    var minPasswordofChars = 8;
    var maxPasswordofChars = 16;
    if (password.length < minPasswordofChars || password.length > maxPasswordofChars) {
        return true;
    }
}
exports.validatePasswordLength = validatePasswordLength;
function validatePhoneNumber(phone_number) {
    var minNumberofChars = 8;
    var maxNumberofChars = 15;
    if (phone_number.length < minNumberofChars || phone_number.length > maxNumberofChars) {
        return true;
    }
}
exports.validatePhoneNumber = validatePhoneNumber;
//# sourceMappingURL=validation.js.map