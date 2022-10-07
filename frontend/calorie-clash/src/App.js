import './App.css';

function App() {
  return (
    <div className="App">
      <div id="navbar" class="sticky">
          <a href="home"> Home </a>
          <a href="leaderboard"> Leaderboard </a>
          <a href="profile"> Profile </a>
      </div>
      <div id="container" class="center">
          <h1 class="center projectname"> Project Name Here </h1>
          <div class="center content">
              {/*Put welcome message + basic info about web app*/}
              <p class="text">
                  Info Here
              </p>
          </div>
      </div>
    </div>
  );
}

export default App;
