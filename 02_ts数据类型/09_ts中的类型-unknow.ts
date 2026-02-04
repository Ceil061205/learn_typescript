// unknown类型任何操作都是不合法的
let foo: unknown = 'aaa'
foo = 11


// 如果要用则需要类型校验
if (typeof foo === "string")
  console.log(foo.length, foo.split(" "));

export {}