function useState<Type>(inS: Type): [Type, (newS: Type) => void] {
  let state = inS
  function setS(newS: Type) {
    state = newS
  }
  return [state, setS]
}

const [count, setCount] = useState(1000)

export {}