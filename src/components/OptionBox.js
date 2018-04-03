import React from 'react'
import PropTypes from 'prop-types'

const OptionBox = ({options, moveToAnswerBox}) => {
  return (
    <div>{options.map((word)=><div key={word} className="word" onClick={(event)=>moveToAnswerBox(word, event)}>{word}</div>)}</div>
  )
}

OptionBox.propTypes = {
  option: PropTypes.array,
  moveToAnswerBox: PropTypes.func
}

export default OptionBox
