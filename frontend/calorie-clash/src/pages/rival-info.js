import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../forms/log-calories'

class RivalInfo extends React.Component {

  constructor(props) {
    super(props);
    //Redirects to pro
    if(window.localStorage.getItem("UID") === null) {
      window.open("/login", "_self");
    } else if (window.localStorage.getItem("Rival UID") === null) {
      window.open("/edit-profile", "_self");
    }
    this.state = {f_name: "f", l_name: "l", weight: 0, h_ft: 0, h_in: 0, pronouns: "N/A", l_pref: "noob", t_pref: 0, w_pref: "cardio", c_burn: 0, data: [], success: false};
  }

  //Gets the current rival profile information via a GET request
  componentDidMount() {
      //Get rival uid
      var url = 'http://127.0.0.1:8000/userprofile/' + window.localStorage.getItem("Rival UID") + '/';
      fetch(url).then((response) => response.json()).then((json) => {
          this.setState({data: json});
          var works = this.state.data.map((d) => {
              this.setState({f_name: d.first_name, l_name: d.last_name, weight: d.weight, h_ft: d.height_ft, h_in: d.height_in, pronouns: d.pronouns, l_pref: d.level_pref, t_pref: d.time_pref, w_pref: d.workout_pref, c_burn: d.total_calories_burned});
              return true;
          })
          this.setState({success: works});
      });  
  }

  render() {
    //Sets the level based on level shorthand given
    var level = "Advanced";
    if(this.state.l_pref === "noob") {
      level = "Beginner";
    } else if(this.state.l_pref === "intm") {
      level = "Intermediate";
    }

    //Sets the workout preference based on shorthand given
    var workout = "Calisthenics";
    if(this.state.w_pref === "weight") {
      workout = "Weight Lifting";
    } else if(this.state.w_pref === "cardio") {
      workout = "Cardio";
    }

    //Profile info
    return (
      <div className="App">
        <div id="title" class="center">
            <h1 class="center projectname">Rival Profile</h1>
        </div>
        <div class="center content">
            <h2 class="center subheader">Info</h2>
            <p class="text">
                <b>First Name: </b>{this.state.f_name} <br></br><br></br>

                <b>Last Name: </b>{this.state.l_name} <br></br><br></br>

                <b>Pronouns: </b>{this.state.pronouns} <br></br><br></br>

                <b>Weight: </b>{this.state.weight} <br></br><br></br>

                <b>Height (ft): </b>{this.state.h_ft} <br></br><br></br>

                <b>Height (in): </b>{this.state.h_in} <br></br><br></br>

                <b>Workout Level: </b>{level} <br></br><br></br>

                <b>Workout Time Preference: </b>{this.state.t_pref} <br></br><br></br>

                <b>Workout Preference: </b>{workout} <br></br><br></br>
                
                <b>Total Calories Burned: </b>{this.state.c_burn} <br></br><br></br>
            </p>
        </div>
      </div>
    );
  }
}

  export default RivalInfo;