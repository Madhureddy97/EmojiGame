// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameInProgress, topScore, currentScore} = props

  return (
    <nav className="nav-container">
      <div className="nav-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="nav-score-container">
          <p className="score-title">Score: {currentScore}</p>
          <p className="score-title">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
