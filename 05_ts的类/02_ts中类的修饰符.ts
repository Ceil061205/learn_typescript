class Person {
  // 默认情况下就是public，在外部也可以访问
  // private 本身才能访问
  // protected 类及子类
  public name: string
  public age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p1 = new Person('xyz', 12)

export {}