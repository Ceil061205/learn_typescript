interface Ip<Type = number> {
  name: string
  age: Type
}
const ip: Ip<number> = {
  name: "xyz",
  age: 2
}

export {}