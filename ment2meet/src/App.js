import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import MasterForm  from './form2/MasterForm';
import Card  from './groupSessionCards/Card';


function App() {
  return (
    
    <Router>
      <Navbar />
      <MasterForm/>
    </Router>
  );
}

export default App;
