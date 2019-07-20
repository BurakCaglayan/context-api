import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Users from './components/Users';
import AddUser from './components/AddUser'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar title="User App" />
          <hr />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/github" component={Contribute} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
