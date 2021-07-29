import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MasterForm  from './form2/MasterForm';


function Form() {
  return (
    <Router>
      <Navbar />
        <MasterForm />
    </Router>
  );
}

export default Form;
