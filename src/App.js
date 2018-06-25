import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Create from  './components/Create';
import Detail from  './components/Detail';
import Home from  './components/Home';


class App extends Component {
  constructor(props){
    super(props);
    
  }

  
  
  
  
  render() {
    return (
      <Router>
      <div>
      
  
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/id/:id" component={Detail} />
          <Route exact path="/create" component={Create} />
          <Redirect to='/' />
      </Switch>
      </div>    

      
      </Router>
    );
  }
}

export default App;
