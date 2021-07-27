import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Regisiter from './components/auth/register';
import './App.css';
import React, { Component }  from 'react';


const App = () => {
  <Router>
  <Fragment>
    <h1>App</h1>
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Regisiter} />
      </Switch>
    </section>

  </Fragment>
  </Router>
}

export default App;
