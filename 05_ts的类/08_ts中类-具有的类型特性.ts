class Person {
  constructor(public name: string,public age: number) {
  }
}
// 类的作用：可以创建对应实例，可以被当做类型，也可以当做一个有构造签名的函数
const p1: Person = new Person('xyz', 12)

// 构造签名改为：需要两个参数（string、number），返回 Person 实例
function factory(ctor: new (name: string, age: number) => Person) {}
factory(Person) // 无报错，类型匹配

export {}