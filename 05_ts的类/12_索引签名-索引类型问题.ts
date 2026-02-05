interface IC {
  // 类型是string或者number
  [index: string]: any
  // [index: string]: string//会报错因为一个数组里面有很多其他属性 返回值是函数
  length: number
}

// 索引的number会被转成string 所以可以用[0]数字访问
const nums: IC = ["abc", "nxjx"]
nums[0]

export {}