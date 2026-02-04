// 1.区别一： type使用范围更广 接口类型只能用来声明对象
type MyNumber = number


// 2.区别2：在声明对象的时候 接口可以多次声明
// type pT1 = {
//   x:number
// }
// type pT1 = {
//   z?: number
// }
interface pT2 {
  x: number
}
interface pT2{
  y:number
}
const obj: pT2 = { x: 1, y: 2 }

// 3.接口可以被继承
interface pT extends pT2 {
  z: number
}


// 开发中接口用于对象 其他类型直接使用type

export {}