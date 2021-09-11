import React from 'react'
function bookroom(){
    return(
        <body>
            <div class="container">
                
                <form>
                    <div className="row">
                        <h1 align="center">Patient Register</h1>
                        <div className="col-md-6">
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
                        </div>

                        <div className="col-md-6">
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8" style={{paddingTop: 20, marginTop:10, paddingBottom: '30px'}}>
                            <button> <span><b>submit</b></span></button>
                        </div>
                    
                        <div className="col-md-4" style={{paddingTop: 20, marginTop:10, paddingBottom: '30px'}}>
                            <button className="reset-button">Reset</button>
                        </div>
                    </div>
                </form>                
            </div>
        </body>
        

        
    )
}
export default bookroom;
