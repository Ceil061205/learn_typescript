// 元组类型
// 可以存放各种类型 取出来的value会有明确的类型
const infos: [string, number, number] = ['xyz', 18, 199]
const value = infos[0]

// 在函数中使用最多
function useState(initS: any): [number, () => void] {
  return [111,function(){}]
}
export {}