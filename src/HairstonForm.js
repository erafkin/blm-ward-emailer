import React, {Component} from 'react';
import './App.css';

class HairstonForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }
    render() {
        const email = 'Ward05@cityofchicago.org';
        const subject = 'Budget Vote';
        const emailBody = `Dear Alderwoman Hairston, %0D%0A         %0D%0A
        When you voted YES on the anti-Black, pro-police budget, you chose to stand with cops, corporations and the Mayor as opposed to with the groundswell of Chicago residents who have been calling for the defunding of the Chicago Police Department and investment in Black and brown communities. %0D%0A
        You had the choice to lead with your espoused progressive ideals and vote NO on the budget. We are disappointed that you instead chose to vote for an immoral budget that increases the portion of the budget allocated for CPD, includes regressive taxes on working class Chicagoans, increases speeding fines, and funds a lethal program that will send armed police to respond to Chicagoans experiencing mental health crises while underfunding a non-police crisis response program. %0D%0A 
        As residents who are deeply committed to the defunding of CPD and investment in life-affirming resources, we will continue to hold you accountable to the Black and brown residents who will be hit hardest by the budget and the continual harm perpetrated by CPD. This fight includes and is not limited to the closure of Homan Square, robust funding for a public mental health crisis response system, and a drastic decrease in police funding in next year’s budget. We are determined to fight for what we know Chicagoans need and deserve. %0D%0A
        %0D%0A
        Sincerely, %0D%0A
        ${this.state.name}        
        `;
        return(
            <div>
                <p>Aldermen are your representation in City Council. They vote on policy regarding police reform and funding.</p>  
                <p>On the most recent city budget vote,  Alderwoman Hairston of the 5th Ward voted YES on an anti-Black, pro-police budget.</p>
                <p>This site generates a template email signed with your name in your default Mail application criticizing this decision </p>
                <p> <a className = 'link'
                        href = 'https://www.chicago.gov/city/en/depts/mayor/iframe/lookup_ward_and_alderman.html' 
                        target = '_blank' 
                        rel="noopener noreferrer">
                            If she is your representative,
                    </a> email her now:</p>
                <form onSubmit={this.sendEmail}> 
                    <label>
                        Name: &nbsp;
                        <input type="text" name="name" onChange ={ (e) => {this.setState({ name : e.target.value })}} className = 'name'/>
                    </label>
                    <br/>
                    <br/>
                </form>
                <a href={`mailto:${email}?subject=${subject}&body=${emailBody}`} className = "submit">Write my email </a>
                <p>Please share with all of your friends in Chicago!</p>
            </div>
        );
    }
} export default HairstonForm;