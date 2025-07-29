const Challenge = () => {
  const a = 3
  const b = 5

  const sum = () => {
    console.log(a + b)
  }

  return (
    <div>
      <p>Valor 1: {a}</p>
      <p>Valor 2: {b}</p>
      <button onClick={sum}>somar os valores!</button>
    </div>
  )
}

export default Challenge
