// 很少用never 很少实际去定义  开发框架，封装工具类可能会用到
// never标识永远不会发生值的类型 推导中可能会遇见该类型
// 表示不返回任何东西
function foo(): never {
  throw new Error('111')
}

function bar() {
  return []
}

function msg(message: string | number) {
  switch (typeof message) {
    case "string":
      console.log(message.length);
      break;
    case "number":
      break;
    default:
      // 对于未处理完的不严谨的逻辑会报错
      // never表示不能是任意值
      const check: never = message
  }
    
}
msg(1111)
msg('1111')

export {}