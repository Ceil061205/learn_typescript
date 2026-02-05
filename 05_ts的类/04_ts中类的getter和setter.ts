class Person {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  set name(newV: string) {
    this._name = newV
  }
  get name() {
    return this._name
  }

  set age(newV: number) {
    if (newV > 0) {
      this._age = newV
    }
  }
  get age() {
    return this._age
  }
}

const p1 = new Person('xyz', 12)
// 不合法会无效
p1.age = -1


export {}