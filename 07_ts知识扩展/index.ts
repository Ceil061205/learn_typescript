import { price } from "./utils/format";
import { sum } from "./utils/math";
// 推荐加上type关键字 明确指定了是类型 
// import type { IdT, It } from "./utils/type";

const id: IdT = 111
console.log(sum(1, 2));

// 使用命名空间的内容
price.format()

// 内置的类型声明
let doc: Document