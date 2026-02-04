// 可以有默认参数 ，有默认值的时候类型可以省略,也可以接受一个undefined和不传这个值一样
// 可选类型放后面
function foo(x: number, y = 100) {
  
}
foo(1, undefined)
export {}