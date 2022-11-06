import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../forms/log-calories'

const ProfileInfo = () => {
    return (
      <div className="App">
        <div id="title" class="center">
            <h1 class="center projectname">Profile Info</h1>
        </div>
        {/* Only show when logged in when we figure out how to check if logged in*/}
        <div class="center content">
            <h2 class="center subheader">User Info</h2>
            <p class="text">
                uid:<br></br>
                First Name:<br></br>
                Last Name:<br></br>
                Calories burned today:<br></br>
                Calories burned total:<br></br>
                Current Rival:<br></br>
            </p>
            <p className="text">
                Click below to log your calories burned today! <br></br>
                <Link className= "center lbutton" to="/log-calories">Log Calories</Link>
            </p>
        </div>
      </div>
    );
  };

  export default ProfileInfo;