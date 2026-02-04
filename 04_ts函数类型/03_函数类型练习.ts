type calT = (num1: number, num2: number) => number
function calc(calFn: calT) {
  const num1 = 100
  const num2 = 22
  calFn(num1, num2)
}

function sum(num1: number, num2: number) {
  return num1 + num2
}
calc(sum)

calc(function (num1, num2) {
  return num1 - num2
})

export {}