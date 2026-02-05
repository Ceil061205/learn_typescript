interface IC {
  age: number
}
interface IP extends IC {
  name: string
}

const ip: IP = {
  name: 'xyz',
  age: 1
}
export {}