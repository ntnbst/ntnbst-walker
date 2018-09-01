import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <main className="App">

          </main>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
