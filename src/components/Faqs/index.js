import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faq-app-container">
          <h1 className="faq-main-heading">FAQs</h1>
          <ul className="faq-ul-list">
            {faqsList.map(eachFaq => (
              <FaqItem key={eachFaq.id} faqsList={eachFaq} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
