// typeof === instanceof in
function printId(id: number | string) {
  if (typeof id == "number") {
    
  }
}

type Direction = "left" | "right" | "top"
function switchD(d: Direction) {
  if (d === "left") {
    
  }
}

function printDate(date: string | Date) {
  if (date instanceof Date) {
    
  }
}

interface IS {
  swim: () => void
}
interface IR {
  run: () => void
}
// 判断是否包含某个key
function animal(a: IR | IS) {
  if ("swim" in a) {
    
  }
}



export {}