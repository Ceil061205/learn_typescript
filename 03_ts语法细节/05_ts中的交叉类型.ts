type Id = number | string

type NewT = number & string//没有意义

interface pT1 {
  name: string
}
interface pT2 {
  age: number
}

const infos: pT1 & pT2 = {
  name: 'xuz',
  age: 0
}

export {}