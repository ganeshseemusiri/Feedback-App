import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackApp: false,
  }

  onClickEmoji = () => this.setState({isFeedbackApp: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <p className="heading">Thank You!</p>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackApp} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackApp
            ? this.renderFeedbackThankyou()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
