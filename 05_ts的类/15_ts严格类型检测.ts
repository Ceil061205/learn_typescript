interface Ip {
  name: string
}

// 被二次赋值时候 多的东西不检测
const obj = { name: 'xuz', age: 123 }
const info: Ip = obj

export {}