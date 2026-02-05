// 抽象类不能被实例化
abstract class Shape {
  // 只有方法没有实现体，可以定义为抽象方法，抽象方法必须只能出现在抽象类中，子类必须实现
  abstract getArea(): any
}
class Circle extends Shape {
  constructor(public w: number) {
    super()
  }
  getArea() {

  }
}
class React extends Shape {
  constructor(public w: number) {
    super()
  }
  getArea() {
    
  }
}

function Area(shape: Shape) {
  return shape.getArea()
}
Area(new Circle(1))
Area({getArea(){}})

export {}