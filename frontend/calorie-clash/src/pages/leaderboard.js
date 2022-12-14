import React, { Component} from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';

class Leaderboard extends Component{
  constructor(props) {
    super(props);
    this.state = {data:[], c_burn: 0, total: 0, udata: [], success: false};
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

    //Gets current user stats
    if(window.localStorage.getItem("UID") !== null) {
      var url = 'http://127.0.0.1:8000/userprofile/' + window.localStorage.getItem("UID") + '/';
        fetch(url).then((response) => response.json()).then((json) => {
            this.setState({udata: json});
            var works = this.state.udata.map((d) => {
                this.setState({c_burn: d.calories_burned_today, total: d.total_calories_burned});
                return true;
            })
            this.setState({success: works});
        });
    }
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

    //Shows user stats only if user is logged in
    let stats;
    if(window.localStorage.getItem("UID") === null) {
      stats = <p className="text">Login to view your stats.</p>
    } else {
      stats = <p className="text">Calories burned today: {this.state.c_burn} <br></br> <br></br> Total Calories Burned: {this.state.total}</p>
    }

    return (
      <div className="App">
        <div id="title" className="center">
              <h1 className="center projectname"> Leaderboard</h1>
        </div>
        <div className="center content">
            <h2 className="center subheader">Guide</h2>
            <p className="text">
                Below you can find the leaderboard of the top 10 users who burned the most calories this week! <br></br><br></br>
    
                Click on the user's name to see their public profile! <br></br><br></br>
    
                Under the leaderboard, you can see your current stats to see where you are relative to others (if you are logged in). <br></br><br></br>
            </p>
        </div>
        <div className="center content">
            <h2 className="center subheader">Top 10 Calorie Burners (Global)</h2>
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
            <h2 className='subheader center'> Current User Stats </h2>
            {stats}
        </div>
      </div>
    );
  }
};
  
export default Leaderboard;