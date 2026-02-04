function foo(this: { name: string }, info: { name: string }) {
  console.log(this);
}
type FooT = typeof foo
// 获取函数的this类型
type FooThis = ThisParameterType<FooT>
// 删除this参数类型，剩余的参数类型
type PureT = OmitThisParameter<FooT>


// 用于绑定一个上下文的this
interface IState {
  name: string,
  age: number,
}
interface IStore {
  state: IState,
  eat: () => void
}
const store: IStore & ThisType<IState> = {
  state: {
    name: 'SSS',
    age: 11
  },
  eat() {
    console.log(this.name);
  }
}

export {}