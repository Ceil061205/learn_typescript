interface IC {
  [index: string]: number
  len: number
}
function iter(c: IC) {
  console.log(c[0]);
}
const names = ['111', '222', 'lll']
const tuple: [number] = [1]

iter({name: 11, len: 90})

export {}