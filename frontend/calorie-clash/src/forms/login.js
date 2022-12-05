import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../stylesheets/signup.css';
import { NavLink as Link } from "react-router-dom";

//Used https://reactjs.org/docs/forms.html for reference

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        //Currently all changes and info is handled internally
        //Change this when figuring out how to link to django
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Handles when form input boxes are changed
    handleChange(event) {    
        this.setState({[event.target.name]: event.target.value});  
    }

    //Handles when the form is submitted
    handleSubmit(event) {
        event.preventDefault();

        //TODO: Checks if username and password exist w/ Django
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
            {
                "username": this.state.username,
                "password": this.state.password
            })
        };

        fetch('http://127.0.0.1:8000/check-user/', requestOptions).then((response) => response.text()).then((text) => {
                if(text === '["Login info not found..."]') {
                    console.log("Wrong username or password");
                    alert("Error: Your username or password was incorrect. Please try again.");
                } else {
                    window.localStorage.setItem("UID", text);
                    alert("Successfully logged in!")
                    window.open("/profile", "_self");
                }
            })
    }

    //What the form looks like
    render() {
        return (
            <div className='App'>
                <div id="title" class="center">
                    <h1 class="center projectname"> Login </h1>
                </div>
                <div className="center thin content">
                    <form className ="left" onSubmit={this.handleSubmit}>       

                        <label for = "username"> Username: </label>  <br></br>
                        <input name = "username" type="text" value={this.state.email} onChange={this.handleChange} required/> <br></br>

                        <label for = "password"> Password: </label>  <br></br>
                        <input name = "password" type="password" value={this.state.password} onChange={this.handleChange} required/> <br></br>
                        <input type="submit" value="Submit" />
                    </form>
                    <p className="text">Forgot password?</p>
                    <Link className= "center lbutton space" to="/forgot-password">Forgot Password</Link>
                    <p className="text">Don't have an account?</p>
                    <Link className= "center lbutton space" to="/signup">Sign Up</Link>
                </div>
            </div>
        );
    }   
}

export default Login;