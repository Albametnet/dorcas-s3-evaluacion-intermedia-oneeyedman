import React, { Component, Fragment } from 'react';
import './App.css';
import PokeList from './components/PokeList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Mi lista de Pokemon</h1>
        <PokeList lascriaturas={this.props.criaturas} />
      </Fragment>
    );
  }
}

export default App;
