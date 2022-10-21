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
      <div className = "content center">
        <h1>Log in to view your profile stats</h1>
      </div>
      <div class="center content">
          <h2 class="center subheader">Info</h2>
          <p class="text">
              Click below to log your calories burned today! <br></br>
              <Link id="started" to="/log-calories">Log Calories</Link>
          </p>
      </div>
    </div>
  );
};
  
export default Profile;