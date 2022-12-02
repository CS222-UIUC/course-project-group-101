import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../forms/log-calories'
  
class Profile extends React.Component {

  constructor(props) {
    super(props);
    //Redirects to login if not logged in
    if(window.localStorage.getItem("UID") === null) {
      window.open("/login", "_self");
    }
    this.state = {f_name: "f", l_name: "l", weight: 0, h_ft: 0, h_in: 0, pronouns: "N/A", data: [], success: false};
  }

  //Gets the current profile information via a GET request
  componentDidMount() {
      var url = 'http://127.0.0.1:8000/userprofile/' + window.localStorage.getItem("UID") + '/';
      fetch(url).then((response) => response.json()).then((json) => {
          this.setState({data: json});
          var works = this.state.data.map((d) => {
              this.setState({f_name: d.first_name, l_name: d.last_name, weight: d.weight, h_ft: d.height_ft, h_in: d.height_in, pronouns: d.pronouns});
              return true;
          })
          this.setState({success: works});
      });
  }

  render() {
    return (
      <div className="App">
        <div id="title" class="center">
            <h1 class="center projectname">Profile</h1>
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
                <Link className= "center lbutton" to="/edit-profile">Edit</Link>
            </p>
            <p className="text">
                Click below to log your calories burned today! <br></br>
                <Link className= "center lbutton" to="/log-calories">Log Calories</Link>
            </p>
        </div>

        <div className = "content center">
          <p className="text">
                Click below to check out your profile! <br></br>
                <Link className= "center lbutton" to="/profile-info">Profile Info</Link>
            </p>
        </div>
      </div>
    );
  }
}
  
export default Profile;