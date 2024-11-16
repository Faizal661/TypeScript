"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));

function upperCase(val) {
    return val.toUpperCase();
}
console.log(upperCase('heello'));

function signIn(name, email, isBlock) {
}
console.log(signIn('faizal', 'faizal@gmail.com', false));

var loginUser = function (name, email, isBlocked) {
    if (isBlocked === void 0) { isBlocked = false; }
};
console.log(loginUser('fa', '@gmail.com'));
