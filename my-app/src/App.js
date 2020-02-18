import React from 'react';
import './App.css';
import User from './components/User';
import Followers from './components/Followers';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>React Github User Card</h1>
        <User />
        <Followers />
      </div>
    );
  }
}

export default App;
