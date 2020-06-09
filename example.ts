import { lowSame, lowSameEmpty } from "./lowpare";

const a:any[] = [];
const b:any[] = [];

console.log(lowSame<Array<string>>(a, b));
console.log(lowSameEmpty<Array<string>>(a, b));

const c = { prop: [] };
const d = { prop: [] };

console.log(lowSame<{ prop: any[] }>(c, d));
console.log(lowSameEmpty<{ prop: any[] }>(c, d));

const s = "123";
const t = "123";

console.log(lowSame<string>(s, t));
console.log(lowSameEmpty<string>(s, t));
