// TODO: ts是否可直接类型限制为一种
type SimpleType = string | number | boolean | null | undefined;
type Types = { [propName: string]: any } | any[] | Symbol | {} | [];
/**
 * lowSame Compare two objects-like whether same-content or not
 * @param {*} p previous object
 * @param {*} c current object
 * @returns {boolean}
 */
export function lowSame<T extends Types>(p: T, c: T): boolean {
  if (typeof p !== typeof c) {
    console.warn("lowpare:: please give args of one type", p, c);
    return false;
  }
  let r =
    c instanceof Object
      ? JSON.stringify(c) === JSON.stringify(p)
        ? true
        : false
      : c === p
      ? true
      : false;
  return r;
}

/**
 * sameEmpty Compare two objects-like whether empty & same-content or not
 * @param {*} previous previous object
 * @param {*} current current object
 * @returns {boolean}
 * FALSY ELEMENT REGARD AS EMPTY TRUE
 */
export function lowSameEmpty<T extends Types>(p: T, c: T): boolean {
  let r =
    p instanceof Array && c instanceof Array
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
