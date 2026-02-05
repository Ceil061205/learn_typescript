interface IC {
  age: number

  run: () => void
}
interface IR {
  age: number
}

const ip: IC = {
  age: 1,
  run() {
    console.log(111)
  }
}
// 接口是描述行为 抽象类是把具体东西抽象
class Person implements IC, IR {
  constructor(public age: number){}
  run() {
    console.log('111');
  }
}
const p1 = new Person(1)

export {}