// (参数) => 返回值 参数名称是必须的
type barT = (num1: number) => number
const bar: barT = (arg: number): number => {
  return 111
}

export {}