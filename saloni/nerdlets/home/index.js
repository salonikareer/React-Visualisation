import React, { Component } from 'react';
import './styles.scss';
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class Counter extends Component {

  state = {

    count: 0,

  };

  handleIncrement = () => {
    // Increment the count by 1
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    // Decrement the count by 1
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className='main'>
        <h1>Simple Counter</h1>
        <p>Count: {this.state.count}</p>
        <div className="btn">
          <button onClick={this.handleIncrement}>
            increment
          </button>
          <button onClick={this.handleDecrement}>decrement
          </button>
        </div>
      </div>
    );
  }
}

