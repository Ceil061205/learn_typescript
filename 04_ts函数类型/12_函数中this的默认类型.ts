// 1.对象中的函数中的this
const obj = {
  name: 'xuz',
  // 默认情况下this是any类型
  study() {
    console.log(this.name);
  }
}
obj.study()

// 普通函数
function foo(this: any) {
  console.log(this);
}
export {}