import React from 'react'
import { Button } from 'react-bootstrap';
import { Route, Link, Switch, BrowserRouter as Router,HashRouter } from 'react-router-dom';  


function patientprofile(){
    return(
        <body>
        <div class="container">
            
        <form>
        
            <br></br><br></br><br></br>
        <h1 align="center">Patient profile</h1>
        <br></br>
        
      <text>Patient profile detalis................................................................................................................... </text>
  <h2 align="center">
  <Link to='bookroom'>
  <Button as="input" type="button" value="Book A Hospital Room" />{' '}
  </Link>
  <Link to='labportal'>
  <Button as="input" type="button" value="Lab Report Request" />{' '}
  </Link>

  <Link to='labapoinment'>
  <Button as="input" type="button" value="Lab Apoinment" />{' '}
  </Link>

  <Link to='Pharmacyportal'>
  <Button as="input" type="button" value="Pharmacy" />{' '}
  </Link>
  
  </h2>
            
            
            </form>
            
            </div>
            </body>
        

        
    )
}


  

export default patientprofile;


/*import React, { Component } from 'react';
import {Link} from 'react-router-dom'
 // reactClass --
    return (
      <div>
      <Link to='https://react.semantic-ui.com/'>
      <button type="button" className="btn btn-info">Button</button>
      </Link>
      </div>
    );*/