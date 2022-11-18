import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../forms/log-calories'
  
const Profile = () => {
  //Redirects to login if not logged in
  if(window.localStorage.getItem("UID") === null) {
    window.open("/login", "_self");
  }
  return (
    <div className="App">
      <div id="title" class="center">
          <h1 class="center projectname">Profile</h1>
      </div>
      <div class="center content">
          <h2 class="center subheader">Info</h2>
          <p class="text">
              Insert current public profile info here <br></br>
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
};
  
export default Profile;