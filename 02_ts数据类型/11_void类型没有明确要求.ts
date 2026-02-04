const names = ['ss', 'snsnsn']
// 当基于上下文推断出来是void 并不强制要求不能返回内容
names.forEach((item) => {
  return item
})
export {}