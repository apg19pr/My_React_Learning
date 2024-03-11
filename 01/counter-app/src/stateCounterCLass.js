import React, { Component } from 'react'

export default class StateCounterClass extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      name: 'John' };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1,
    name: "Abhi" });
  };

  render() {
    return (
      <div className='section'>
        <p><b>StateCounterClass (Class Component)</b></p>
        <p>count:<b> {this.state.count}</b> & Name:<b> {this.state.name}</b></p>
        <button onClick={this.incrementCount}>incrementCount: {this.state.count}</button>
      </div>
    )
  }
}


