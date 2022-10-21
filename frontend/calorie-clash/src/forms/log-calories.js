import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../stylesheets/form.css';

//Used https://reactjs.org/docs/forms.html for reference

class LogCalories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {calories_burned: 0};
        //Currently all changes and info is handled internally
        //Change this when figuring out how to link to django
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Handles when form input boxes are changed
    handleChange(event) {    
        this.setState({calories_burned: event.target.value});  
    }

    //Handles when the form is submitted
    handleSubmit(event) {
        alert('Amount of calories burned submitted: ' + this.state.calories_burned);
        event.preventDefault();
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
                            Add calorie calculation reference guide here
                        </p>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }   
}

export default LogCalories;