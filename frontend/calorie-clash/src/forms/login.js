import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../stylesheets/signup.css';
import { NavLink as Link } from "react-router-dom";

//Used https://reactjs.org/docs/forms.html for reference

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
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

        var valid = true;
        if(valid) {
            //TODO: Change to correct UID once the Django is connected
            window.localStorage.setItem("UID", 1);
            alert("Successfully logged in! " + window.localStorage.getItem("UID"));

            window.open("/profile", "_self");
            
        } else {
            alert("Error: Your email or password was incorrect. Please try again.");
        }
        
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

                        <label for = "email"> Email: </label>  <br></br>
                        <input name = "email" type="email" placeholder="example@gmail.com" value={this.state.email} onChange={this.handleChange} required/> <br></br>

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