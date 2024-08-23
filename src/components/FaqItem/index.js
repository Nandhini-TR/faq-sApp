import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isShow: false}

  renderAnswer = () => {
    const {faqsList} = this.props
    const {answerText} = faqsList
    const {isShow} = this.state

    if (isShow) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }

    return null
  }

  toggleButton = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  renderActiveImage = () => {
    const {isShow} = this.state
    const image = isShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isShow ? 'minus' : 'plus'

    return (
      <button
        type="button"
        className="plus-minus-btn"
        onClick={this.toggleButton}
      >
        <img src={image} alt={altText} className="plus-minus-image" />
      </button>
    )
  }

  render() {
    const {faqsList} = this.props
    const {questionText} = faqsList

    return (
      <li className="card-container">
        <div className="ques-container">
          <h1 className="question-title">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
