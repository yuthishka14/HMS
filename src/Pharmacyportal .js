import React from 'react'
function Pharmacyportal(){
    return(
        <body>
        <div class="container">
            
        <form  method="post">
        <br></br><br></br><br></br>
        <h1 align="center">Pharmacy Portal</h1>
        <br></br>
        
            <lable><b> Name</b></lable>
            <input type="text" name="uid" placeholder="Enter your name"></input>

            <br></br>
            <lable><b>NIC no</b></lable>
            <input type="text" name="nic" placeholder="Enter NIC"></input>

            <br></br>
            <lable><b>Address</b></lable>
            <input type="text" name="address" placeholder="Enter Address"></input>

            <br></br>
             <lable><b>Email</b></lable>
            <input type="text" name="email" placeholder="Enter Emal"></input>
            
            <br></br>
            <lable><b>Mobile</b></lable>
            <input type="int" name="mobile" placeholder="Enter Mobile"></input>
            

            <br></br>
            <lable><b>Resident phone No.</b></lable>
            <input type="int" name="resident" placeholder="Enter your Resident phone no."></input>
            
            
            <button> <span><b>submit</b></span></button> 
            <input type="reset" value="Reset" class="reset-button" />
            </form>
            
            </div>
            </body>
        

        
    )
}
export default Pharmacyportal;
