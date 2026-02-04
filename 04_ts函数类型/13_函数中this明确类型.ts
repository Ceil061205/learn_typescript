// 1.对象中的函数中的this
const obj = {
  name: 'xuz',
  // 能推导出this的类型所以不用写
  study() {
    console.log(this.name);
  }
}
obj.study()
//"noImplicitThis":true,时候不能有模糊的this
// 把this作为第一个参数
function foo(this: { name: string }, info: { name: string }) {
  console.log(this);
}
foo.call({name: 'xzy'},{name: 'kkk'})
export {}