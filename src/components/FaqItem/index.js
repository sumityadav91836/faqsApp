import './index.css'

const FaqItem = props => {
  const {eachFaq, showAns, onToggleAns} = props
  const {id, questionText, answerText} = eachFaq

  const renderAns = () => (
    <div className="ans-container">
      <hr />
      <p>{answerText}</p>
    </div>
  )

  const showAnsBtn = showAns
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const showAnsAltText = showAns ? 'minus' : 'plus'

  const onClickBtnElement = () => {
    onToggleAns(id)
  }

  return (
    <li className="faq-item">
      <div className="que-container">
        <h1 className="faq-question">{questionText}</h1>
        <button className="btn" type="button" onClick={onClickBtnElement}>
          <img src={showAnsBtn} alt={showAnsAltText} className="icon" />
        </button>
      </div>
      {showAns && renderAns()}
    </li>
  )
}

export default FaqItem
