import React from 'react';
import './LoginStyle.css';

export default function Login() {
    return (
        <div>
            <div class="container">
		
                <form onSubmit={onSubmitForm}>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br>
                <h1 align="center">Patient Login</h1>
                <br></br><br></br><br></br>
                <br></br><br></br><br></br>
                    <lable><b>User Name</b></lable>
                    <input type="text" name="uid" placeholder="Enter username"></input>
                    <br></br><br></br><br></br>
                    <br></br><br></br>
                    <lable><b>Password</b></lable>
                    <input type="password" name="pass" placeholder="Enter password"></input>
                    <br></br>
                    <button type="submit"> <span><b>submit</b></span></button><br></br>
                    
                    <a href ="register.html"><input class="name" type="button" value="Not Register"></input></a><br></br>
                </form>
                </div>
        </div>
    )
}

const onSubmitForm = (event) =>{
    event.preventDefault();

    alert("Form Submitted");
}
