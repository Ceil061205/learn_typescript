class Person {
  // 成员属性声明 !标识后面会进行赋值
  name!: string
  age!: number
  // name = 'xyz'
  // age = 10

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person('xyz', 12)

export {}