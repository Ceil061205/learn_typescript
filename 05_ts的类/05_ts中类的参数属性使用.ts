class Person {
  // 可以省略字段+省略赋值操作 在构造函数中必须显示声明修饰符

  constructor(public name: string,private age: number) {
  }

}

const p1 = new Person('xyz', 12)


export {}