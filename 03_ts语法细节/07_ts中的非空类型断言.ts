interface Ip {
  name: string,
  age?: number,
  friend?: {
    name: string
  } 
}

const infos: Ip = {
  name: 'xyzj'
}
// 访问时用？
console.log(infos.friend?.name);
// 赋值时用非空断言解决这个问题(该动作危险 一定要确保friend有值一定存在)
infos.friend!.name = 'jsjsjs'

export {}