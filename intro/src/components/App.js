import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Only one needed at app root so react-router can pass props down to components*/}
        <div className="App">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/other'>Topics</Link></li>
          </ul>
          <hr/>

          {/*exact looks for exact match instead of regex'd - (path is regex) 
          /about would match both Home and About here otherwise*/}
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/other' component={Topics}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
