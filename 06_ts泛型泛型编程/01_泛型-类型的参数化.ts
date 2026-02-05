// 固定的
// function foo(name: string, age: number) {
// }
// foo("why", 19)

// 类型被参数化了
function bar<Type>(arg: Type) {
  return arg
}

// 完整写法
const res1 = bar<number>(1)
// 也能类型推导
const res2 = bar('xxxx')




export {}