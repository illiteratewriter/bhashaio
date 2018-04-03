import React from 'react'
import PropTypes from 'prop-types'

const AnswerBox = ({ answer }) => {
  return (
    <div>{answer.map((word)=><div key={word} className="word">{word}</div>)}</div>
  )
}

AnswerBox.propTypes = {
  answer: PropTypes.array.isRequired
}

export default AnswerBox
