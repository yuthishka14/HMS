import React from 'react'
function Register(){
    return(
        <body>
        <div class="container">
            
        <form>
        <br></br><br></br><br></br>
        <h1 align="center">Patient Register</h1>
        <br></br>
        
            <lable><b> Name</b></lable>
            <input type="text" name="uid" placeholder="Enter your name"></input>

            <br></br>
             <lable><b>Email</b></lable>
            <input type="text" name="email" placeholder="Enter Emal"></input>

            <br></br>
            <lable><b>Address</b></lable>
            <input type="text" name="address" placeholder="Enter Address"></input>

            <br></br>
            <lable><b>Mobile</b></lable>
            <input type="int" name="mobile" placeholder="Enter Mobile"></input>

            
            <br></br>
            <lable><b>User name</b></lable>
            <input type="text" name="name" placeholder="Enter NIC"></input>

            <br></br>
            <lable><b>Password</b></lable>
            <input type="password" name="pass" placeholder="Enter your password"></input>
            
            
            
            <button> <span><b>submit</b></span></button> 
            <input type="reset" value="Reset" class="reset-button" />
            </form>
            
            </div>
            </body>
        

        
    )
}
export default Register;
