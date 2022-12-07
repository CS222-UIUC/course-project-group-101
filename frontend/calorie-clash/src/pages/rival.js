import React from 'react';
import { NavLink as Link } from "react-router-dom";
import '../stylesheets/App.css';
import '../stylesheets/general.css';

class Rival extends React.Component {
  constructor(props) {
    super(props);
    //Redirects to login if not logged in
    if(window.localStorage.getItem("UID") === null) {
      window.open("/login", "_self");
    }
    this.state = {rival: ""};
  }

  componentDidMount() {
    var url = 'http://127.0.0.1:8000/userprofile/' + window.localStorage.getItem("UID") + '/';
    fetch(url).then((response) => response.json()).then((json) => {
        this.setState({data: json});
        var works = this.state.data.map((d) => {
            this.setState({rival : d.rival});
            return true;
        })
        this.setState({success: works});
    });
  }

  onButtonClickHandler = () => {
    window.alert('Your Rival is:' + this.rival)
  };

  render () {
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

            <button onClick={this.onButtonClickHandler}>Enter</button>
        </p>
      </div>
    </div>
  };
};
  
export default Rival;