import './stylesheets/App.css';
import './stylesheets/general.css';
import Home from './pages/home';
import Started from './pages/get-started';
import Leaderboard from './pages/leaderboard';
import Profile from './pages/profile';

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import LogCalories from './forms/log-calories';
// import Home from './pages';
  
function App() {
return (
    <Router>
    <Navbar />
    
    <Routes>
        {/* <Route exact path='/' exact element={<Home/>} /> */}
        <Route path='/home' element={<Home/>} />
        <Route path='' element={<Home/>} />
        <Route path='/get-started' element={<Started/>} />
        <Route path='/leaderboard' element={<Leaderboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/log-calories' element={<LogCalories/>} />
    </Routes>
    </Router>
);
}
  
export default App;

/*The Home Page*/
// function App() {
//   return (
//     <div className="App">
//       <div id="navbar" className="sticky">
//           {/*Add the appropriate links when the pages are created*/}
//           <a href="leaderboard"> Leaderboard </a>
//           <a href="profile"> Profile </a>
//           <a href="get-started"> Getting Started </a>
//           <a href="home"> Home </a>
//       </div>
//       <div id="title" className="center">
//           {/*We can put a logo here when we have one*/}
//           <h1 className="center projectname"> Calorie Clash </h1>
//       </div>
//       {/*Put welcome message + basic info about web app*/}
//       <div className="center content">
//         <p className="text">
//             Welcome to Calorie Clash! <br></br><br></br>

//             Are you having trouble getting into your workout groove? <br></br><br></br>

//             No worries because Calorie Clash has your back! <br></br><br></br>

//             Calorie Clash can help you track workouts and calories burned and 
//             find and match individuals as “rivals” to bolster fitness competition and comradery where many cannot find it. <br></br><br></br>


//             Interested? Click below to learn more! <br></br><br></br>

//             <button id="started" onClick={gettingStarted}>Get Started</button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;
