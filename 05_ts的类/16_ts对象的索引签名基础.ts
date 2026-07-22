interface Ip {
  name: string
  [key: string]: any
}

const info: Ip = {
  name: 'xxx',
  age: 111,
  ajsjs: 'sss'
}

interface IType {
  [key: string]: string
}

function getArray(): IType {
  const abc: any = 'ssss'
  return abc
}

const infos = getArray()
console.log(infos.abc);

export {}