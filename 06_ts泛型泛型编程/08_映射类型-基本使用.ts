// 类似函数
// T = IP   keyof = “name” | "age"
type MapPerson<T> = {
  // [index: number]: any
  [p in keyof T]: T[p]
}

interface IP {
  name: string
  age: number
}

// 拷贝一份IP
type newP = MapPerson<IP>


export {}