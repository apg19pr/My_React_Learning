import React, { Component } from 'react'

export default class ClassComponent extends React.Component {

  constructor(props) {
    console.log("inside constructor........");
    super();
    this.state = {
      // fname: "abhishek",
      fname: props.defaultName, // from porps
      products: {}

    }
  }


  static getDerivedStateFromProps(props, state) { // same props can be passed in constructor  as well
    console.log("inside getDerivedStateFromProps........");
    console.log("state is:- ", state)
    console.log("props are:- ", props)
    // return {
    //   // fname: "Prajapati by getDerivedStateFromProps()"
    //   // fname: props.defaultName // from porps
    // }
    return null
  }

  componentDidMount() {
    console.log("inside componentDidMount........");

    // this is for "mouting" phase to fetch APi 
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => this.setState({
    //     products: json
    //   }));

    this.setState({
      fname: "Abhishek > from componentDidMount "
    })
  }


  shouldComponentUpdate() {
    console.log("inside shouldComponentUpdate........");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("inside getSnapshotBeforeUpdate........");
    console.log(`prevProps:- ${JSON.stringify(prevProps)}`);
    console.log(`prevState:- ${JSON.stringify(prevState)}`);
    // return null
    return prevState;
  }

  componentDidUpdate(prevProps, prevState, sanpshot) {
    console.log("Inside componentDidUpdate........");
    console.log(`sanpshot:- ${JSON.stringify(sanpshot)}`);
  }

  componentWillUnmount() {
    console.log("Inside componentWillUnmount........"); // not visible bcoz unmount 
    // no need to update state here
    // remove Event listeners
    // clear timeouts

  }

  render() {
    console.log("inside render........");
    console.log("Products are:- ", this.state.products);
    return (
      <div>
        <h1>ClassComponent</h1>
        <h2>React component LifeCyle</h2>

        <div>
          <ol className="lifeCycle">
            <li>Phase I :- <b>Mounting</b>
              <ol>
                <li>Constructor()</li>
                <li>getDerivedStateFromProps()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
              </ol>
            </li>
            <li>Phase I :- <b>Updating</b>
              <ol>
                <li>static getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
              </ol>
            </li>
            <li>Phase I :- <b>Unmounting</b>
              <ol>
                <li>componentWillUnmount()</li>
              </ol>
            </li>
            <li>Phase I :- <b>Error Handling methods</b>
              <ol>
                <li>static getDerivedStateFromError()</li>
                <li>componentDidCatch()</li>
              </ol>
            </li>
          </ol>
        </div>

        <p>My name is {this.state.fname}</p>


      </div>
    )
  }
}
