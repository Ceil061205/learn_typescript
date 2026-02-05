class Person {
  // 只读属性不能进行修改操作
  readonly name: string
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person('xyz', 12)

export {}