// void没有返回值，void类型下也可以返回undefined
function foo(): void {
  console.log('sssss');
  // return undefined
}

type Foot = () => void
const foo1: Foot = () => {

}

// 限制入参是函数 返回类型为void 
type Fn =  (...args: any[]) => void
function bar(fn: Fn) {
  setTimeout(() => {
    fn()
  }, 3000)
}

export {}