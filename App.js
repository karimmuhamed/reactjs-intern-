import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import Index from './Components/Index';
import SignUp from './Components/SignUp';
import PatientForm from './Components/PatientForm';
import Dentistry from './Components/Dentistry/Dentistry';
import SkinCare from './Components/SkinCare';
import FacialAesthetics from './Components/FacialAesthetics';
import Profile from './Components/Profile';
import test from './Components/test';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route path="/SignUp" render={props => <SignUp {...props} />} />

        <Route exact path="/Patients" component={PatientForm} />
        <Route exact path="/Patients/Dentistry" component={Dentistry} />
        <Route exact path="/Patients/Skincare" component={SkinCare} />
        <Route exact path="/Patients/FacialAesthetics" component={FacialAesthetics} />
        <Route exact path="/Profile" exact component={Profile} />
        <Route exact path="/test" component={test} />
      </BrowserRouter>
    );
  }
}

export default App;
