function getKey<O, K extends keyof O>(obj: O, key: K) {//这里的key是info里面的key
  return obj[key]
}
const info = {
  name: 'xyz',
  age: 11
}
getKey(info, 'name')
export {}