type calT = (num1: number) => number
// 函数除了被调用还有其他属性的情况下
interface barI {
  name: string,
  age: number,
  // 函数作为对象时候可以调用 调用签名
  (num1: number): number
}
const bar: barI = (num1: number): number => {
  return 111
}
//只是描述函数类型本身 就使用函数表达式 calT
// 同时存在其他值时候用调用签名 barT
bar.name = 'xyz'
bar.age = 12
bar(123)

export {}