// 优先选用联合类型使用
function getLen(arg: string | any[]) {
  return arg.length
}

getLen("shhs")
export {}