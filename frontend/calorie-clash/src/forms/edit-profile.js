import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/general.css';
import '../stylesheets/form.css';

//Used https://reactjs.org/docs/forms.html for reference

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        //const data = JSON.parse(response.json());
        this.state = {f_name: "f", l_name: "l", weight: 0, h_ft: 0, h_in: 0, pronouns: "", l_pref: "noob", data: [], success: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Fills in the information with the current profile information via a GET request
    componentDidMount() {
        var url = 'http://127.0.0.1:8000/userprofile/' + window.localStorage.getItem("UID") + '/';
        fetch(url).then((response) => response.json()).then((json) => {
            this.setState({data: json});
            var works = this.state.data.map((d) => {
                this.setState({f_name: d.first_name, l_name: d.last_name, weight: d.weight, h_ft: d.height_ft, h_in: d.height_in, pronouns: d.pronouns, l_pref: d.level_pref});
                return true;
            })
            this.setState({success: works});
        });
    }

    //Handles when form input boxes are changed
    handleChange(event) {    
        this.setState({[event.target.name]: event.target.value});  
    }

    //Handles when the form is submitted
    handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
            {
                "uid": window.localStorage.getItem("UID"),
                "first_name": this.state.f_name,
                "last_name": this.state.l_name,
                "pronouns": this.state.pronouns,
                "weight": this.state.weight,
                "height_ft": this.state.h_ft,
                "height_in": this.state.h_in,
                "level_pref": this.state.l_pref
            })
        };
        var url = 'http://127.0.0.1:8000/userprofile/' + window.localStorage.getItem("UID") + '/';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        alert("Changes Recorded!");
        window.open("/profile", "_self");
    }

    //What the form looks like
    render() {
        let option1;
        let option2;
        let option3;
        if(this.l_pref === "noob") {
            option1 = <option value="noob" selected>Beginner</option>;
            option2 = <option value="intm">Intermediate</option>;
            option3 = <option value="adv">Advanced</option>;
        } else if (this.l_pref === "intm"){
            option1 = <option value="noob">Beginner</option>;
            option2 = <option value="intm" selected>Intermediate</option>;
            option3 = <option value="adv">Advanced</option>;
        } else {
            option1 = <option value="noob">Beginner</option>;
            option2 = <option value="intm">Intermediate</option>;
            option3 = <option value="adv" selected>Advanced</option>;
        }
        return (
            <div className='App'>
                <div id="title" class="center">
                    <h1 class="center projectname"> Edit Profile </h1>
                </div>
                <div className="center content thin">
                    <form onSubmit={this.handleSubmit}>       
                        <label for = "f_name"> First Name: </label>  
                        <input name = "f_name" type="text" value={this.state.f_name} onChange={this.handleChange} required/> <br></br>    

                        <label for = "l_name"> Last Name: </label>  
                        <input name = "l_name" type="text" value={this.state.l_name} onChange={this.handleChange} required/> <br></br> 

                        <label for = "pronouns"> Pronouns: </label>  
                        <input name = "pronouns" type="text" value={this.state.pronouns} onChange={this.handleChange} /> <br></br> 

                        <label for = "weight"> Weight: </label>  
                        <input name = "weight" type="number" min = "1" value={this.state.weight} onChange={this.handleChange} /> <br></br>

                        <label for = "h_ft"> Height (ft): </label>  
                        <input name = "h_ft" type="number" min = "0" value={this.state.h_ft} onChange={this.handleChange}/> <br></br>

                        <label for = "h_in"> Height (in): </label>  
                        <input name = "h_in" type="number" min = "0" value={this.state.h_in} onChange={this.handleChange} /> <br></br>  

                        <p className='text'> Note: You need to submit preferences to get a rival! </p>
                        
                        <label for = "preference"> Height (in): </label>  
                        <select name = "level_pref" onChange={this.handleChange}>
                            {option1}
                            {option2}
                            {option3}
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }   
}

export default EditProfile;