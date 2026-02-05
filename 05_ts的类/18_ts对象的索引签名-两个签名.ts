interface IC {
  // 数字类型的类型（后面的那个类型）是字符串类型的子类型
  [index: number]: string
  [key: string]: any
  // 要么是number 要么是string
  name: number
}
function iter(c: IC) {
  console.log(c[0]);
}
const names = ['111', '222', 'lll']
const tuple: [number] = [1]

iter({name: 11, len: 90})

export {}