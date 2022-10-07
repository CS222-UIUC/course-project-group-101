import './stylesheets/App.css';
import './stylesheets/general.css';

function App() {
  return (
    <div className="App">
      <div id="navbar" className="sticky">
          {/*Add the appropriate links when the pages are created*/}
          <a href="App"> Leaderboard </a>
          <a href="App"> Profile </a>
          <a href="App"> About </a>
          <a href="App"> Home </a>
      </div>
      <div id="title" className="center">
          {/*We can put a logo here when we have one*/}
          <h1 className="center projectname"> Calorie Clash </h1>
      </div>
      {/*Put welcome message + basic info about web app*/}
      <div className="center content">
        <p className="text">
            Welcome to Calorie Clash! <br></br><br></br>

            To learn more about how to use this site click below <br></br>
        </p>
      </div>
    </div>
  );
}

export default App;
