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

  getLeaderboard() {
    fetch("http://127.0.0.1:8000/leaderboardview/")
    .then(response=>response.json())
    .then((data)=>{
      this.setState({
        data:data
      });
    });
  }

  componentDidMount() {
    this.getLeaderboard();
  }

  render() {
    const empData = this.state.data;
    console.log(empData.uid);
    return (
      <div className="App">
        <div className = "content center">
          <h1>Here are the top 10 calorie burners across the world!</h1>
        </div>
      </div>
    );
  }

};
  
export default Leaderboard;