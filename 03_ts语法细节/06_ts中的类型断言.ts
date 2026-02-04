// 断言之后更好使用 
const imgEl = document.querySelector(".img") as HTMLImageElement
// if (imgEl !== null) {
  imgEl.src = 'xxx'
// }


// 转化成具体类型或者不太具体的类型
const age: number = 19
// const age2 = age as string
// 语法上允许 但是不推荐这样写不太正确
// const age3 = age as any
// const age4 = age3 as string


export {}