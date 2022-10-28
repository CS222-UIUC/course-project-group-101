import React, { Component, useEffect } from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';

/*Opens the getting started page (add correct link when made)*/
// function signup() {
//   window.open(App, "_self");
// }

class Leaderboard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  // Sends a request to API to get leaderboard
  getLeaderboard() {
    fetch("http://127.0.0.1:8000/leaderboardview/")
    .then(response=>response.json())
    .then((data)=>{
      this.setState({
        data:data
      });
      console.log(data)
    });
  }

  // Fetches data immediately during initialization
  componentDidMount() {
    this.getLeaderboard();
  }

  render() {
    
    // Displays data in table format 
    const empData = this.state.data;
    const rows = empData.map((emp)=>
      <tr key={emp.calories_burned_today}>
        <td>{emp.first_name + " " + emp.last_name}</td>
        <td>{emp.calories_burned_today}</td>
        <td>{emp.total_calories_burned}</td>
      </tr>
    );
    return (
      <div className="App">
        <div className = "content center">
          <h1>Here are the top 10 calorie burners across the world!</h1>
            <table className='leaderboard'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Calories Burned Today</th>
                  <th>Total Calories Burned</th>
                </tr>
              </thead>
              <tbody> 
                {rows}
              </tbody>
            </table>
        </div>
      </div>
    );
  }

};
  
export default Leaderboard;