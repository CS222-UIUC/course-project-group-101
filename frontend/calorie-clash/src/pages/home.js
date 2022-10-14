import React from 'react';

/*Opens the getting started page (add correct link when made)*/
// function signup() {
//   window.open(App, "_self");
// }
  
const Home = () => {
  return (
    <div className="App">
      <div id="navbar" className="sticky">
          {/*Add the appropriate links when the pages are created*/}
          <a href="leaderboard"> Leaderboard </a>
          <a href="profile"> Profile </a>
          <a href="get-started"> Getting Started </a>
          <a href="home"> Home </a>
      </div>
      <div id="title" className="center">
          {/*We can put a logo here when we have one*/}
          <h1 className="center projectname"> Calorie Clash </h1>
      </div>
      {/*Put welcome message + basic info about web app*/}
      <div className="center content">
        <p className="text">
            Welcome to Calorie Clash! <br></br><br></br>

            Are you having trouble getting into your workout groove? <br></br><br></br>

            No worries because Calorie Clash has your back! <br></br><br></br>

            Calorie Clash can help you track workouts and calories burned and 
            find and match individuals as “rivals” to bolster fitness competition and comradery where many cannot find it. <br></br><br></br>


            Interested? Click below to learn more! <br></br><br></br>

            <button id="started" onClick={gettingStarted}>Get Started</button>
        </p>
      </div>
    </div>
  );
};
  
export default Home;