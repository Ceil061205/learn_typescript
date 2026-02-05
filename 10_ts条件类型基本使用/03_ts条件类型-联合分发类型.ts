type toArray<T> = T extends any ? T[] : never

type NumArray = toArray<number>

type NumAndStrArray = toArray<number | string> //联合类型会一个一个分发


export {}