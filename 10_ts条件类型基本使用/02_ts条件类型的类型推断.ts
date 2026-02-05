type CType = (num1: number, num2: number) => number

function foo() {
  
}
// 获取返回值类型
type CReturnType = ReturnType<CType>
type FReturnType = ReturnType<typeof foo>


type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never
type CReturnType1 = MyReturnType<CType>
type FReturnType1 = MyReturnType<typeof foo>


export {}