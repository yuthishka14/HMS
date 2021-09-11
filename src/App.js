import './App.css';

import React from "react";

import Login from './Login'
import Footer from './componenets/Footer/Footer'
import bookroom from './bookroom';
import labportal from './labportal';
import Pharmacyportal from './Pharmacyportal ';
import Register from './Register';
import { Route, Link, Switch, BrowserRouter as Router,HashRouter } from 'react-router-dom';  
import reactDom from 'react-dom';
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>    
      <div>    
          
            <li><Link to={'/'} className="nav-link"> Login </Link></li>    
            <li><Link to={'/Register'} className="nav-link">Register</Link></li>    
            <li><Link to={'/xx'} className="nav-link">List</Link></li>  
              
        <Switch>    
          <Route path="/" />   
          <Route path="/Register" component={Register} /> 
        </Switch>    
      </div>    
    </Router>   
      <Login />
      <Footer />
      {/* <bookroom />
      <labportal />
      <Pharmacyportal/>
      <Register/> */}
      
    </div>
  );
}

export default App;
