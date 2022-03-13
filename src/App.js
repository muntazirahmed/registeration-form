import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Forms from './Forms'
import Datafetching from './Datafetching'


export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h1>1</h1>
        <Forms />
        <h2>2</h2>
        <Datafetching/>
      </div>
    )
  }
}

export default App