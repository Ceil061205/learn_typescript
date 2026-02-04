type calT = (num1: number, num2: number) => number
function calc(calFn: calT) {
  const num1 = 100
  const num2 = 22
  // 调用的时候必须传两个
  calFn(num1, num2)
}
// 函数的参数个数不进行校验,多余的参数会被忽略掉
calc(function () {
  return 11
})

// ts对很多类型个数没有进行检测 取决于对象是不是第一次定义
type Ty = {
  x: number,
  y: number
}
const p = {
  x: 11,
  y: 222,
  name: 'xyz'
}
const info: Ty = p

export {}