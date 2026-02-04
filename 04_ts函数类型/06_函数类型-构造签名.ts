class Person {

}
interface Icons {
  // 构造签名
  new (): Person
}
function factory(fn: Icons) {
  const f = new fn()
  return f
}
export {}