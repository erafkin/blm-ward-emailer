import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';

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
                });
            })
            .catch((error) => {
                alert(`there was an error : ${error}`)
            })

        } else {
            alert("You must first select your Ward")
        }
        event.preventDefault();
    }

    render() {
        const options = [
            1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50 
          ];
        const defaultOption = this.state.ward > 0 ? this.state.ward.toString() : "Select a Ward";
        console.log(this.state.alderman);
        return(
            <div>
                <p> Email your Alderman. Demand </p>

                <form onSubmit={this.getWardInfo}> 
                    <label>
                        Name:
                        <input type="text" name="name" onChange ={ (e) => {this.setState({ name : e })}}/>
                    </label>
                    <Dropdown options={options} onChange={(e) => {this.setState({ward: e.value})}} value={defaultOption} placeholder="Select an option" />
                    <input type="submit" value="Submit"/>

                </form>

        <p>Alderman: {this.state.alderman}</p>
        <p>email: {this.state.email}</p>

            </div>
        );
    }
} export default Form;