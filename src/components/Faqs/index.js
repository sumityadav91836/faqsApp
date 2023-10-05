import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {showAns: false}

  onToggleAns = uniqueId => {
    const {faqsList} = this.props

    return faqsList.map(eachFaq =>
      eachFaq.id === uniqueId
        ? this.setState(prevState => ({showAns: !prevState.showAns}))
        : null,
    )
  }

  render() {
    const {showAns} = this.state
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faq-card">
          <h1 className="app-title">FAQs</h1>
          <ul className="faqs-list-card">
            {faqsList.map(eachFaq => (
              <FaqItem
                key={eachFaq.id}
                eachFaq={eachFaq}
                showAns={showAns}
                onToggleAns={this.onToggleAns}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
