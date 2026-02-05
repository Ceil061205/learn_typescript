type MapPerson<T> = {
  // -表示删除一些修饰符
  -readonly [p in keyof T]-?: T[p]
}

interface IP {
  readonly name: string
  age: number
}

// 拷贝一份IP 同时对类型进行一些转化
type newP = MapPerson<IP>


export {}