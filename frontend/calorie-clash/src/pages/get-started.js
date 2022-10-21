import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';

/*Opens the getting started page (add correct link when made)*/
// function signup() {
//   window.open(App, "_self");
// }
  
const Started = () => {
  return (
    <div className="App">
      <div className = "content center">
        <h1>Sign in or create a new account to begin your rivalry!</h1>
      </div>
    </div>
  );
};
  
export default Started;

/*The Home Page*/
// function Started() {
//   return (
//     <div className="App">
//       <div id="navbar" className="sticky">
//           {/*Add the appropriate links when the pages are created*/}
//           <a href="App"> Leaderboard </a>
//           <a href="App"> Profile </a>
//           <a href="get-started"> Getting Started </a>
//           <a href="App"> Home </a>
//       </div>
//       <div id="title" className="center">
//           {/*We can put a logo here when we have one*/}
//           <h1 className="center projectname"> Calorie Clash </h1>
//       </div>
//       {/*Put welcome message + basic info about web app*/}
//       <div className="center content">
//         <p className="text">
//             Welcome to Calorie Clash! <br></br><br></br>

//             To begin, first go to our sign up page. <br></br><br></br>

//             There, you can put in workout and physical information, which we will use to match you up with your rival! <br></br><br></br>

//             Want to see your rank locally or around the world? Check out our leaderboard to see how you stack up to the competition! <br></br><br></br>

//             Interested? Click below to get started! <br></br><br></br>

//             <button id="Sign Me Up!" onClick={signup}>Sign Up</button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Started;
