interface It {
  length: number
}
function getLen<Type extends It>(arg: Type): Type {
  return arg
}

const info = getLen('aaaa')
export {}