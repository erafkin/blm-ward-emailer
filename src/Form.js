import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import './App.css';


class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ward: 0,
            email: '',
            alderman: '', 
            name: '',
        }
        this.getWardInfo = this.getWardInfo.bind(this);
        this.sendEmail = this.sendEmail.bind(this);


    }

    getWardInfo(event) {
        console.log(this.state.ward)
        console.log("submitted");
        if (this.state.ward > 0) {
            axios.get('https://data.cityofchicago.org/resource/htai-wnw4.json', {params: {'ward' : this.state.ward}})
            .then((response) => {
                console.log(response.data);
                this.setState({
                    email: response.data[0].email,
                    alderman: response.data[0].alderman
                },() => {
                    this.sendEmail();
                }
                );
            })
            .catch((error) => {
                alert(`there was an error : ${error}`)
            })

        } else {
            alert("You must first select your Ward")
        }
        event.preventDefault();
    }

    sendEmail() {
        var email = this.state.email;
        var subject = 'We Demand Action';
        var emailBody = 'Hi '+ this.state.alderman.substring(0, this.state.alderman.indexOf(','));
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    }

    render() {
        const options = [
            1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50 
          ];
        const defaultOption = this.state.ward > 0 ? this.state.ward.toString() : "Select a Ward";
        return(
            <div>
                <p> Email your Alderman. Demand action. </p>
                <p>Aldermen are your representation in City Council. They directly vote on policy regarding police reform and funding, as well as the city budget that funds social services.</p>
                <p>Please share to all your friends in Chicago!</p>

                <form onSubmit={this.getWardInfo}> 
                    <label>
                        Name:
                        <input type="text" name="name" onChange ={ (e) => {this.setState({ name : e.target.value })}} className = 'name'/>
                    </label>
                    <div className = 'dropdownContainer'>
                        <Dropdown options={options} onChange={(e) => {this.setState({ward: e.value})}} value={defaultOption} placeholder="Select an option" controlClassName='dropdown'/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
                <a className = 'App-link'
                href = 'https://www.chicago.gov/city/en/depts/mayor/iframe/lookup_ward_and_alderman.html' 
                target = '_blank' 
                rel="noopener noreferrer">
                    Don't know your ward?
                </a>
            </div>
        );
    }
} export default Form;