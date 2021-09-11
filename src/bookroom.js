import React from 'react'
function bookroom(){
    return(
        <body>
        <div class="container">
            
        <form  method="post">
        <br></br><br></br><br></br>
        <h1 align="center">Patient Register</h1>
        <br></br>
        
            <lable><b> Room Type</b></lable>
            <input type="text" name="room type" placeholder="Enter your room type"></input>

            <br></br>
             <lable><b>Name</b></lable>
            <input type="text" name="pname" placeholder="Enter Patient Name"></input>

            <br></br>
            <lable><b>Patient NIC</b></lable>
            <input type="text" name="NIC" placeholder="Enter NIC"></input>

            <br></br>
            <lable><b>Patient Address</b></lable>
            <input type="int" name="address" placeholder="Enter patient address"></input>

            <br></br>
            <lable><b>Patient Age</b></lable>
            <input type="int" name="age" placeholder="Enter patient age"></input>

            <br></br>
            <lable><b>Patient Phone No</b></lable>
            <input type="int" name="pno" placeholder="Enter phone no"></input>

            <br></br>
            <lable><b>Insuarance Company Name</b></lable>
            <input type="int" name="insurencecompany" placeholder="Enter company name"></input>

            
            -------------------------------------------------------------------------------------------------------


            <br></br>
            <lable><b>Guardian Name</b></lable>
            <input type="int" name="gname" placeholder="Enter Name"></input>

            <br></br>
            <lable><b>Guardian Nic</b></lable>
            <input type="int" name="gnic" placeholder="Enter NIC"></input>

            <br></br>
            <lable><b>Guardian Address</b></lable>
            <input type="int" name="gaddress" placeholder="Enter Address"></input>

            <br></br>
            <lable><b>Guardian Phone No</b></lable>
            <input type="int" name="gphone" placeholder="Enter mobile no"></input>



            <button> <span><b>submit</b></span></button> 
            <input type="reset" value="Reset" class="reset-button" />
            </form>
            
            </div>
            </body>
        

        
    )
}
export default bookroom;
