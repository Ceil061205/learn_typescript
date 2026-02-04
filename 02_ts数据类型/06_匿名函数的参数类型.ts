const names: string[] = ['xyz', 'ssss']

// 匿名函数最好不要加类型注解
names.forEach(function (item, index, arr) {
  console.log(item);
})

export {}