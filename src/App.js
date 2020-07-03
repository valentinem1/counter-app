import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './Actions/counterActions';


function App(props) {

  return (
    <div className="App">
      <h1 className="counter-header">Counter App</h1>
      <div className="counter-value">{props.count}</div>
      <div>
        <button onClick={() => props.incrementCounter(props.count + 1)} className="counter-btn increment">+</button>
        <button onClick={() => props.decrementCounter(props.count - 1)} className="counter-btn decrement">-</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    count: state.counter.count
  }
}

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(App);
