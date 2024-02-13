// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const result = isWon ? 'You Won' : 'You Lose'
  const title = isWon ? 'Best Score' : 'Score'

  return (
    <div className="result-container">
      <div className="win-or-lose-card">
        <div className="text-container">
          <h1 className="result-heading">{result}</h1>
          <div className="title-score-container">
            <p className="title-para">{title}</p>
            <p className="score">{score}/12</p>
            <button
              type="button"
              className="play-again-button"
              onClick={onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
        <div className="image-container">
          <img className="result-image" src={imageUrl} alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
