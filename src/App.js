import './App.css';

import React from "react";

import Login from './Login'
import Footer from './componenets/Footer/Footer'
import bookroom from './bookroom';
import labportal from './labportal';
import Pharmacyportal from './Pharmacyportal ';
import Register from './Register';
import patientprofile from './patientprofile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import labapoinment from './labapoinment';




function App() {
  return (
    <div className="App">
      <Router>    
      <div>    
          
            {/* <li><Link to={'/'} className="nav-link"> Login </Link></li>    
            <li><Link to={'/Register'} className="nav-link">Register</Link></li>    
            <li><Link to={'/xx'} className="nav-link">List</Link></li>   */}
              
        <Switch>    
          <Route exact path="/" component={Login}/>   
          <Route path="/Register" component={Register}/>
          <Route path="/PharmacyPortal" component={Pharmacyportal}/> 
          <Route path="/LabPortal" component={labportal}/>
          <Route path="/BookRoom" component={bookroom}/>  
          <Route path="/patientprofile" component={patientprofile}/>
          <Route path="/labapoinment" component={labapoinment}/>  

          <Route component={NotFound}/>
        </Switch>    
      </div>    
    </Router>   
      {/* <Footer /> */}
      {/* <bookroom />
      <labportal />
      <Pharmacyportal/>
      <Register/> */}
      
    </div>
  );
}

export default App;
