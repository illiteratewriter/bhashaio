import React from 'react'

import Selector from './Selector'

const App = () => {
  return (
    <div className="App">
      <h1 className="main-heading">Pick the words in order</h1>
      <Selector sentence="What if the content you want centered is an image? Will this method work? The answer is yes with one additional line of css."/>
    </div>
  )
}

export default App
