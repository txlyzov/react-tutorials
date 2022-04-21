import React, { Component } from 'react';

//Old
class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    this.increment = this.increment.bind(this);
    this.dearement = this.dearement.bind(this);
  }

  increment() {
    this.setState({counter: this.state.counter + 1});
  }

  dearement() {
    this.setState({counter: this.state.counter - 1});
  }

  render() { 
    return ( 
      <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.dearement}>Decrement</button>
    </div>
     );
  }
}
 
export default ClassCounter;