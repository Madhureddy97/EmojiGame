// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickEmojiCard = () => clickEmoji(id)

  return (
    <li className="each-emoji-card">
      <button type="button" className="emoji-button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
