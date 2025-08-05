import './GameOver.css'

const GameOver = ({ retry, score, pickedWord }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>A palavra era <span>{pickedWord}</span></h2>
      <h2>A sua pontuação foi <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar o jogo</button>
    </div>
  )
}

export default GameOver
