import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import MasterForm  from './form/MasterForm';


function App() {
  return (
    <Router>
      <Navbar />
        <MasterForm />
    </Router>
  );
}

export default App;
