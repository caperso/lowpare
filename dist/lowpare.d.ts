declare type Types = {
    [propName: string]: any;
} | any[] | Symbol | {} | [];
/**
 * lowSame Compare two objects-like whether same-content or not
 * @param {*} p previous object
 * @param {*} c current object
 * @returns {boolean}
 */
export declare function lowSame<T extends Types>(p: T, c: T): boolean;
/**
 * sameEmpty Compare two objects-like whether empty & same-content or not
 * @param {*} previous previous object
 * @param {*} current current object
 * @returns {boolean}
 * FALSY ELEMENT REGARD AS EMPTY TRUE
 */
export declare function lowSameEmpty<T extends Types>(p: T, c: T): boolean;
export {};
