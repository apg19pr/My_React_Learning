import React, { Component } from 'react'

export default class counter1 extends Component {
  shouldComponentUpdate(nextProps, nextSate) {
    if (this.props.value !== nextProps.value) {
      return true // it will check and chnage only value for clicked counter btn
    }
    return false
   }
  render() {
    console.log("Calling Counter1... ")
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.onClick}>counter1</button>
      </div>
    )
  }
}

