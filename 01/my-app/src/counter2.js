import React, { Component } from 'react'

export default class counter2 extends Component {
  shouldComponentUpdate(nextProps, nextSate) {
    if (this.props.value !== nextProps.value) {
      return true
    }
    return false
  }
  render() {
    console.log("Calling Counter2... ")
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.onClick}>counter2</button>
      </div>
    )
  }
}

