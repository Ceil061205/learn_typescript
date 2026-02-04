let foo: string | number = 123;

foo = 'anbc'
// 使用时要做类型的缩小
if (typeof foo === "string") {
  console.log(foo.length);
}