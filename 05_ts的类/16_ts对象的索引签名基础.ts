interface Ip {
  name: string
}

const info: Ip = {
  name: 'xxx'
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