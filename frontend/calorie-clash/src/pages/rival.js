import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../stylesheets/App.css';
import '../stylesheets/general.css';

const Rival = () => {
  return (
    <div className="App">
      <div id="title" className="center">
          {/*We can put a logo here when we have one*/}
          <h1 className="center projectname"> Rival </h1>
      </div>
      {/*Put welcome message + basic info about web app*/}
      <div className="center content">
        <p className="text">

            What's a rival? <br></br><br></br>

            Rivals are other users on our platform that we found would be a good fit for you based on your profile <br></br><br></br>

            You and your rival can compete and encourage each other to reach your goals! <br></br><br></br>

            Ready to take on a Rival? Click below to find out who yours is! <br></br>

            <Link className= "center lbutton" to="/login">Find Your Rival</Link>
        </p>
      </div>
    </div>
  );
};
  
export default Rival;