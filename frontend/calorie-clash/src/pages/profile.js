import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../forms/log-calories'

/*Opens the getting started page (add correct link when made)*/
// function signup() {
//   window.open(App, "_self");
// }
  
const Profile = () => {
  return (
    <div className="App">
      <div id="title" class="center">
          <h1 class="center projectname">Profile</h1>
      </div>
      {/* Only show when logged in when we figure out how to check if logged in*/}
      <div class="center content">
          <h2 class="center subheader">Info</h2>
          <p class="text">
              Insert current public profile info here <br></br>
              <button className="lbutton center">Edit</button>
          </p>
          <p className="text">
              Click below to log your calories burned today! <br></br>
              <Link className= "center lbutton" to="/log-calories">Log Calories</Link>
          </p>
      </div>

      {/* Show when not logged in when we figure out how to check if logged in*/}
      <div className = "content center">
        <p className = "text">Log in to view your profile stats</p>
      </div>
    </div>
  );
};
  
export default Profile;