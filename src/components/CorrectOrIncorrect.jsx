import React from 'react'
import PropTypes from 'prop-types'

const CorrectOrIncorrect = ({ isCorrect }) => {
  return (
    <div style={{width: '40rem', textAlign:'center'}}>{isCorrect?<div className="correct">Correct</div>:<div className="incorrect">Inorrect</div>}</div>
  )
}

CorrectOrIncorrect.propTypes = {
  isCorrect: PropTypes.bool
}

export default CorrectOrIncorrect
