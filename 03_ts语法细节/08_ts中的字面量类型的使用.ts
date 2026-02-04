const name: 'xyz' = 'xyz' 
// 将多个字面量联合起来
type Direction = "left" | "right" | "top"
const d1: Direction = "left"

type Mt = "get" | "post"
function request(url: string, method: Mt) {
}
const info = {
  url: "xxx",
  methods: 'post'
} as const
request(info.url, info.methods)

export {}