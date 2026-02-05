type IDType = number | string

type ResType = boolean extends IDType ? true : false

function sum<T extends number | string>(num1: T, num2: T): T extends number ? number : string

export {}