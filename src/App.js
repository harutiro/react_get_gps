import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }


  headClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        <button onClick={() => this.headClick()}>+</button>
      </div>
    );
  }
}

export default App;
