// 类似函数
// T = IP   keyof = “name” | "age"
type MapPerson<T> = {
  // [index: number]: any
  readonly [p in keyof T]?: T[p]
}

interface IP {
  name: string
  age: number
}

// 拷贝一份IP 同时对类型进行一些转化
type newP = MapPerson<IP>


export {}