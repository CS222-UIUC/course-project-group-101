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
        <div id="title" className="center">
              <h1 className="center projectname"> Leaderboard</h1>
        </div>
        {/* Only show when logged in when we figure out how to check if logged in*/}
        <div className="center content">
            <h2 className="center subheader">Guide</h2>
            <p className="text">
                Below you can find the leaderboard of the top 10 users who burned the most calories this week! <br></br><br></br>
    
                Click on the user's name to see their public profile! <br></br><br></br>
    
                Under the leaderboard, you can see your current stats to see where you are relative to others. <br></br><br></br>
            </p>
        </div>
        <div className="center content">
            <h2 className="center subheader">Put leaderboard here!</h2>
            <p className="text">Here are the top 10 calorie burners across the world!</p>
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
        <div className="center content">
            <h2 className="center subheader">Put current user stats here (if applicable)!</h2>
        </div>
        {/* Show when not logged in when we figure out how to check if logged in*/}
        <div className = "content center">
          <p className = "text">Log in to view your profile stats</p>
        </div>
      </div>
    );
  }
};
  
export default Leaderboard;