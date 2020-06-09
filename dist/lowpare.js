"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * lowSame Compare two objects-like whether same-content or not
 * @param {*} p previous object
 * @param {*} c current object
 * @returns {boolean}
 */
function lowSame(p, c) {
    if (typeof p !== typeof c) {
        console.warn("lowpare:: please give args of one type", p, c);
        return false;
    }
    var r = c instanceof Object
        ? JSON.stringify(c) === JSON.stringify(p)
            ? true
            : false
        : c === p
            ? true
            : false;
    return r;
}
exports.lowSame = lowSame;
/**
 * sameEmpty Compare two objects-like whether empty & same-content or not
 * @param {*} previous previous object
 * @param {*} current current object
 * @returns {boolean}
 * FALSY ELEMENT REGARD AS EMPTY TRUE
 */
function lowSameEmpty(p, c) {
    var r = p instanceof Array && c instanceof Array
        ? p.length === 0 && c.length === 0
            ? true
            : false
        : p instanceof Object && !(p instanceof Array)
            ? Object.keys(p).length === 0 && Object.keys(c).length === 0
                ? true
                : false
            : !!c === false && c === p
                ? true
                : false;
    return r;
}
exports.lowSameEmpty = lowSameEmpty;
