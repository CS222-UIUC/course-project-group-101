import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../stylesheets/signup.css';

//Used https://reactjs.org/docs/forms.html for reference

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", first_name: "", last_name: "", email: "", password: "", password_confirm: ""};
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
    }

    //What the form looks like
    render() {
        //Shows a warning if the passwords don't match
        let not_match;
        if (this.state.password === this.state.password_confirm) {      
            not_match = <p className = "text"></p>;    
        } else {      
            not_match = <p className = "text">Your passwords don't match!</p>;   ;    
        }
        return (
            <div className='App'>
                <div id="title" class="center">
                    <h1 class="center projectname"> Signup </h1>
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

                        <label for = "password"> Password: </label>  <br></br>
                        <input name = "password" type="password" value={this.state.password} onChange={this.handleChange} required/> <br></br>

                        <label for = "password_confirm"> Confirm Password: </label>  <br></br>
                        <input name = "password_confirm" type="password"  value={this.state.password_confirm} onChange={this.handleChange} required/> <br></br>  
                        {not_match}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }   
}

export default Signup;