// 多个属性可以用； ，分割 换行可省略 不写类型默认any ?可选
type pointT = { x: number, y: number, z?: number }
function printC(point: pointT) {
  console.log(point.x);
  console.log(point.y);
}

printC({x: 1, y: 1})

export {}