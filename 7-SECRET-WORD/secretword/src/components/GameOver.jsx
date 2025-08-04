import './GameOver.css'

const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>Game over!</h1>
      <button onClick={retry}>Reiniciar o jogo</button>
    </div>
  )
}

export default GameOver
