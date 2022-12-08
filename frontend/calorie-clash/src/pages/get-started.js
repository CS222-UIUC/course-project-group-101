import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../stylesheets/App.css';
import '../stylesheets/general.css';
  
const Started = () => {
  return (
    <div className="App">
      <div id="title" className="center">
            <h1 className="center projectname"> Getting Started</h1>
      </div>
      <div className="center content">
            <h2 className="center subheader">How to Register</h2>
            <p className="text">
                To make a profile that stores all your stats, 
                you have to make an account so that we can get you up and running in the system. <br></br><br></br>
    
                Click below to register ! <br></br>
                
                <Link className= "center lbutton space" to="/signup">Sign Up</Link>

                Already have an account? Login here ! <br></br>
                
                <Link className= "center lbutton" to="/login">Login</Link>
            </p>
      </div>
      <div className="center content">
          <h2 className="center subheader">How to Navigate</h2>
          <p className="text">
              Most of the main pages that are important are in the navigation bar above. <br></br>

              If you haven't logged in yet, most of these pages will redirect you to the login page!<br></br>
          </p>
          <h3 className="center subheader2">Home</h3>
          <p className="text">
              Welcome page! <br></br>
          </p>
          <h3 className="center subheader2">Leaderboard</h3>
          <p className="text">
              This is where you can see a leaderboard of the global top users and how you match up against them. <br></br>
          </p>
          <h3 className="center subheader2">Profile</h3>
          <p className="text">
            This is where you can view your current profile stats, log your progress, and check in on your rival.
            You can also edit your public profile details here too. <br></br>
          </p>

          <h3 className="center subheader2">Rival</h3>
          <p className="text">
            This is where you can view your rival's current stats for some motivation! <br></br>
          </p>
      </div>
    </div>
  );
};
  
export default Started;
