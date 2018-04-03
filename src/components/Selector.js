import React from 'react'
import PropTypes from 'prop-types';

import AnswerBox from './AnswerBox'
import CorrectOrIncorrect from './CorrectOrIncorrect'
import OptionBox from './OptionBox'

class Selector extends React.Component {
  state = {
    options: [],
    answer:[],
    isCorrect: false,
    isComplete: false,
    elements: 0
  }

  componentDidMount(){
    let temp = this.props.sentence.split(" ")
    temp = this.shuffle(temp)
    this.setState({options: temp, elements:temp.length})
  }

  shuffle = (array) => {
    var i,j,temp
    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  moveToAnswerBox=(word, event)=>{
    event.target.style.visibility = "hidden"
    let {answer, elements} = this.state
    answer.push(word);
    --elements
    // options.splice(options.findIndex(words=>words===word),1)
    if(elements === 0) {
      let joinedString = answer.join(" ")
      if(joinedString === this.props.sentence) {
        this.setState({answer, elements, isComplete:true, isCorrect: true})
      } else {
        this.setState({answer, elements, isComplete:true, isCorrect: false})
      }
    } else {
      this.setState({answer, elements})
    }
  }

  render () {
    console.log(this.state.options);
    return(
      <div>
        <div className="sentence-parent">
          <h2 className="sentence">{this.props.sentence}</h2>
        </div>
        <div className="answer-box">
          <AnswerBox answer={this.state.answer}/>
        </div>
        <div className="options-box">
          {this.state.isComplete?
            <CorrectOrIncorrect isCorrect={this.state.isCorrect} />:
            <OptionBox options={this.state.options} moveToAnswerBox={this.moveToAnswerBox}/>}
        </div>
      </div>
    )
  }
}

Selector.propTypes = {
  sentence: PropTypes.string.isRequired
}

export default Selector;
