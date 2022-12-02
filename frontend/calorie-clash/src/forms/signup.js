import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../stylesheets/signup.css';

//Used https://reactjs.org/docs/forms.html for reference

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", first_name: "", last_name: "", email: "", password: "", password_confirm: "", uid: -1};
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
        var valid = false;
        var pass = this.state.password;
        //Checks if password meets requirements
        //Used https://www.geeksforgeeks.org/validate-a-password-using-html-and-javascript/ for reference
        if (pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g)) {
            if(this.state.password === this.state.password_confirm) {
                valid = true;
            }
        }
        if(valid) {

            var profileCreation = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    "first_name": this.state.first_name,
                    "last_name": this.state.last_name
                })
            };

            
            fetch('http://127.0.0.1:8000/create-userprofile/', profileCreation)
                .then((response) => response.text())
                .then((data) => {
                this.state.uid = data;
                console.log("data: ", data);
                console.log("uid: ", this.state.uid);
                fetch('http://127.0.0.1:8000/create-user/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            "username": this.state.username,
                            "email": this.state.email,
                            "password": this.state.password,
                            "uid": this.state.uid
                        })
                    }).then((response) => {response.json()})
                }    
            );
                        

            // alert("Information valid! Successfully Submitted!");
            // window.open("/profile", "_self");

        } else {
            alert("Error. Invalid information somewhere. Please try again.");
        }
    }

    //What the form looks like
    render() {
        //Shows a warning if the passwords don't match
        let not_match;
        if (this.state.password === this.state.password_confirm) {      
            not_match = <p className = "text"></p>;    
        } else {      
            not_match = <p className = "text">Your passwords don't match!</p>;
        }

        //Shows warnings based off if the password requirements are met
        let has_lower;
        if(this.state.password.match(/[a-z]/g)) {
            has_lower = <p className = "text"></p>;
        } else {
            has_lower = <p className = "text">Your password needs a lowercase letter!</p>;
        }

        let has_upper;
        if(this.state.password.match(/[A-Z]/g)) {
            has_upper = <p className = "text"></p>;
        } else {
            has_upper = <p className = "text">Your password needs an uppercase letter!</p>;
        }

        let has_digit;
        if(this.state.password.match(/[0-9]/g)) {
            has_digit = <p className = "text"></p>;
        } else {
            has_digit = <p className = "text">Your password needs a digit!</p>;
        }

        let has_special;
        if(this.state.password.match(/[^a-zA-Z\d]/g)) {
            has_special = <p className = "text"></p>;
        } else {
            has_special = <p className = "text">Your password needs a special character!</p>;
        }
        return (
            <div className='App'>
                <div id="title" class="center">
                    <h1 class="center projectname"> Sign Up </h1>
                </div>
                <div className="center thin content">
                    <form className ="left" onSubmit={this.handleSubmit}>       
                        <label for = "username"> Username: (150 characters or fewer)</label>  <br></br>
                        <input name = "username" placeholder="Username" type="text" maxlength = "150" value={this.state.username} onChange={this.handleChange} required/> <br></br>    

                        <label for = "first_name"> First Name: </label>  <br></br>
                        <input name = "first_name" placeholder="First Name" type="text" value={this.state.first_name} onChange={this.handleChange} required/> <br></br> 

                        <label for = "last_name"> Last Name: </label>  <br></br>
                        <input name = "last_name" placeholder="Last Name" type="text" value={this.state.last_name} onChange={this.handleChange} required/> <br></br> 

                        <label for = "email"> Email: </label>  <br></br>
                        <input name = "email" type="email" placeholder="example@gmail.com" value={this.state.email} onChange={this.handleChange} required/> <br></br>
                        
                        <h2>Password Requirements:</h2>
                        <ul>
                            <li>Must contain at least 8 characters</li>
                            <li>Must contain at least 1 upper and lower case letter</li>
                            <li>Must contain at least 1 digit</li>
                            <li>Must contain at least 1 special character</li>
                        </ul>

                        <label for = "password"> Password: </label>  <br></br>
                        <input name = "password" type="password" value={this.state.password} onChange={this.handleChange} required/> <br></br>

                        <label for = "password_confirm"> Confirm Password: </label>  <br></br>
                        <input name = "password_confirm" minlength = "8" type="password"  value={this.state.password_confirm} onChange={this.handleChange} required/> <br></br>  
                        {not_match}
                        {has_lower}
                        {has_upper}
                        {has_digit}
                        {has_special}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }   
}

export default Signup;