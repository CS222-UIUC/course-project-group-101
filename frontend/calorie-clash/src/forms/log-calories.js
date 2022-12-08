import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../stylesheets/form.css';

//Used https://reactjs.org/docs/forms.html for reference

class LogCalories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {calories_burned: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Handles when form input boxes are changed
    handleChange(event) {    
        this.setState({calories_burned: event.target.value});  
    }

    //Handles when the form is submitted
    handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
            {
                "calories_burned_today": this.state.calories_burned
            })
        };
        fetch('http://127.0.0.1:8000/userprofile/' + window.localStorage.getItem("UID") + '/', requestOptions)
            .then(response => response.json());
        alert('Amount of calories burned submitted: ' + this.state.calories_burned);
        window.open("/profile", "_self");
    }

    //What the form looks like
    render() {
        return (
            <div className='App'>
                <div id="title" class="center">
                    <h1 class="center projectname"> Log Calories </h1>
                </div>
                <div className="center content">
                    <form onSubmit={this.handleSubmit}>       
                        <label for = "calories"> Number of calories burned: </label>  
                        <input id = "calories" type="number" min = "0" value={this.state.calories_burned} onChange={this.handleChange} />      
                        <p className='text'>
                            Don't know how many calories you burned? Click on the link below! <br></br> <br></br>
                            
                            <a href = "https://www.verywellfit.com/how-many-calories-you-burn-during-exercise-4111064">Calories Burned Calculated</a>
                        </p>
            
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }   
}

export default LogCalories;