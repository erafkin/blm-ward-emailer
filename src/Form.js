import React, {Component} from 'react';
import Select from 'react-select';
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
            mayor: false,
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
        if(this.state.mayor) email += ",letterforthemayor@cityofchicago.org";
        var subject = 'Use of Force Policies';
        var emailBody = `Alderman ${this.state.alderman.substring(0, this.state.alderman.indexOf(','))}${this.state.mayor ? " and Mayor Lightfoot" : ""}, %0D%0A 
        I am writing to ask you to implement the Use of Force policies laid out by Campaign Zero at https://8cantwait.org/. I live in Ward ${this.state.ward} and I care deeply about making our community safer. These policies are simple, common-sense, and data-driven. %0D%0A 
        I am asking you to enact the following policies: %0D%0A
            1. Ban of chokeholds and strongholds %0D%0A
            2. Require warning before shooting %0D%0A
            3. Ban of shooting at moving vehicles %0D%0A
            4. Require comprehensive reporting %0D%0A
        Campaign Zero's data shows that if you implement these policies, in addition to the other policies already in place in Chicago, we can decrease police violence in our community by 72%. All of these policies can be implemented with your vote on City Council, and I’m asking you not to hesitate to make our city safer.
        %0D%0A
        Sincerely, %0D%0A
        ${this.state.name}        
        `;
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    }

    render() {
        const options = [
            {value: 1, label: '1st'}, 
            {value: 2, label: '2nd'}, 
            {value: 3, label: '3rd'}, 
            {value: 4, label: '4th'}, 
            {value: 5, label: '5th'}, 
            {value: 6, label: '6th'}, 
            {value: 7, label: '7th'},
            {value: 8, label: '8th'},  
            {value: 9, label: '9th'}, 
            {value: 10, label: '10th'}, 
            {value: 11, label: '11th'}, 
            {value: 12, label: '12th'}, 
            {value: 13, label: '13th'}, 
            {value: 14, label: '14th'}, 
            {value: 15, label: '15th'}, 
            {value: 16, label: '16th'}, 
            {value: 17, label: '17th'}, 
            {value: 18, label: '18th'}, 
            {value: 19, label: '19th'}, 
            {value: 20, label: '20th'}, 
            {value: 21, label: '21st'}, 
            {value: 22, label: '22nd'}, 
            {value: 23, label: '23rd'}, 
            {value: 24, label: '24th'}, 
            {value: 25, label: '25th'}, 
            {value: 26, label: '26th'},
            {value: 27, label: '27th'}, 
            {value: 28, label: '28th'}, 
            {value: 29, label: '29th'}, 
            {value: 30, label: '30th'}, 
            {value: 31, label: '31st'}, 
            {value: 32, label: '32nd'}, 
            {value: 33, label: '33rd'}, 
            {value: 34, label: '34th'}, 
            {value: 35, label: '35th'}, 
            {value: 36, label: '36th'},
            {value: 37, label: '37th'}, 
            {value: 38, label: '38th'}, 
            {value: 39, label: '39th'}, 
            {value: 40, label: '40th'}, 
            {value: 41, label: '41st'}, 
            {value: 42, label: '42nd'}, 
            {value: 43, label: '43rd'}, 
            {value: 44, label: '44th'}, 
            {value: 45, label: '45th'}, 
            {value: 46, label: '46th'},
            {value: 47, label: '47th'}, 
            {value: 48, label: '48th'}, 
            {value: 49, label: '49th'}, 
            {value: 50, label: '50th'}, 
          ];
        const defaultOption = this.state.ward > 0 ? this.state.ward.toString() : "Select ward";
        return(
            <div>
                                <h1> Email your Alderman. Demand action. </h1>

                <p>
                    According to Campaign Zero, there are 8 simple policies that can decrease police violence by 72%. Chicago's current policies remain inadequate.
                    Click <a className = 'here' href = 'https://8cantwait.org/' target = '_blank' rel="noopener noreferrer">here</a> for more info.
                </p>
                <p>Demand that City Council implements the following 4 policies to make our city a safer place.</p>
                <ul>
                    <li>Ban of chokeholds and strong holds </li>
                    <li>Require warning before shooting </li>
                    <li>Ban of shooting at moving vehicles </li>
                    <li>Require comprehensive reporting  </li>
                </ul>
                <p>Aldermen are your representation in City Council. They directly vote on policy regarding police reform and funding.</p>
                <p>Email yours now:</p>
                <form onSubmit={this.getWardInfo}> 
                    <label>
                        Name: &nbsp;
                        <input type="text" name="name" onChange ={ (e) => {this.setState({ name : e.target.value })}} className = 'name'/>
                    </label>
                    <br/>
                    <div className = 'dropdownContainer'>
                     <Select options={options} 
                     onChange={(e) => {this.setState({ward: e.value})}} 
                     clearable = {true} 
                     singleValue={defaultOption} 
                     placeholder="Select ward" 
                     className='dropdown'/>
                    </div>
                    <a className = 'link'
                        href = 'https://www.chicago.gov/city/en/depts/mayor/iframe/lookup_ward_and_alderman.html' 
                        target = '_blank' 
                        rel="noopener noreferrer">
                            Don't know your ward?
                    </a>
                <br/>
                <br/>
                <input type="checkbox" name="mayor" checked={this.state.mayor} onChange={() => {this.setState({mayor: !this.state.mayor})}}/>
                <label for="mayor"> Include Mayor Lightfoot</label>
                <br/>
                <br/>
                <input type="submit" value="Write my Email" className = 'submit'/>
                </form>

                <p>Please share with all your friends in Chicago!</p>

                
            </div>
        );
    }
} export default Form;