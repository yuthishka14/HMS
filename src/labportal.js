import React from 'react'
import Dropdown from '@restart/ui/esm/Dropdown';
import { DropdownButton } from 'react-bootstrap';

function labportal(){
    return(
        <body>
            <div class="container">
                
                <form>  
                    <br></br><br></br><br></br>
                    <h1 align="center">Lab Tests</h1>
                    <br></br>
                
                    <lable><b> Customer Name</b></lable>
                    <input type="text" name="cusname" placeholder="Enter your name"></input>

                    <br></br>
                    <lable><b>mobile</b></lable>
                    <input type="text" name="cusmobile" placeholder="Enter mobile"></input>

                    <br></br>
                    <lable><b>Customer Email</b></lable>
                    <input type="text" name="cusemail" placeholder="Enter Email"></input>

                    <br></br>
                    <lable><b>Customer Whatsapp No</b></lable>
                    <input type="int" name="cuswhatsappno" placeholder="Enter whatsapp No"></input>

                    
                    <br></br>
                    <lable><b>Test ID</b></lable>
                    <input type="text" name="testid" placeholder="Enter Test ID"></input>

                    <br></br>
                    <lable><b>Test Type</b></lable>
                    
                    
                    
                    <DropdownButton id="dropdown-basic-button" title="Test type">
                    <Dropdown.Item href="#/action-1">Blood test/</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Urine test/</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">PCR Test</Dropdown.Item>
                    </DropdownButton>
                    

                    </form>  
                    <br></br>
                    <br></br>
                    <center><button> <span><b>submit</b></span></button> 
                    <input type="reset" value="Reset" class="reset-button" /></center>
                              
            </div>
        </body>
                   
    )
}
export default labportal;
