import React from 'react';

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
        this.setState({calories_burned: event.target.calories_burned});  
    }

    //Handles when the form is submitted
    handleSubmit(event) {
        alert('Amount of calories burned submitted: ' + this.state.calories_burned);
        event.preventDefault();
    }

    //What the form looks like
    render() {
        return (
          <form onSubmit={this.handleSubmit}>       
           <label>
              Number of calories burned:
              <input type="number" value={this.state.calories_burned} onChange={this.handleChange} />        
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
    }   
}