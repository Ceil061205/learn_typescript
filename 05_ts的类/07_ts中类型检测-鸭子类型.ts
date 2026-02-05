// 鸭子类型：只关心属性和行为 不关心具体对应什么类型
class Person {
  constructor(public name: string,public age: number) {
  }
}
function printP(p: Person) {
  console.log(p.name);
}
const p1 = new Person('xyz', 12)
printP(p1)
printP({name: '111', age: 9})
export {}