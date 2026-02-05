enum Direction{
  UP,
  DOWN,
  LEFT,
  RIGHT
}
const d1: Direction = Direction.UP
function turnD(d: Direction) {
  switch (d) {
    case Direction.LEFT:
      console.log('LEFT');
      break
    case Direction.DOWN:
      console.log('DOWN');
      break
  }
}
export {}