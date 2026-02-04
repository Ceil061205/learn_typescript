// string才是ts提供的字符串类型
// String是js提供的包装类
let msg: string = "hhh"

// msg = undefined
// 经过tsc转成js代码  tsc xxx.ts --> xxx.js

console.log(msg);

export {};

