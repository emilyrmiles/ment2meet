import React, {Component} from "react";
import Mentor from "./Mentor";
import "./Mentor.css";

import axios from "axios"; 

class Mentors extends Component {
    constructor(props) {
        super(props);

        // Set the intiial input values
        this.state = {
            mentors: []
        };
    }

    async componentDidMount() {
        await axios.get('http://localhost:5000/api/mentor')
                .then(data => {
                    this.setState({ mentors: data.data });
                    console.log(JSON.stringify(data, null, 4));
                })
                .catch(error => console.log(error));
     }
    
     async componentDidUpdate() { 
        await axios.get('http://localhost:5000/api/mentor')
                .then(data => {
                    this.setState({ mentors: data.data });
                    console.log(JSON.stringify(data, null, 4));
                })
                .catch(error => console.log(error));
     }
     
  render() {

    return (
      <div className="mentors-container">
          {this.state.mentors.map((mentor) => {
            return (
                <Mentor
                src = {mentor.avatar}
                name = {mentor.name}
                pronouns = {mentor.pronounce}
                position = {mentor.position}
                company = {mentor.company}/>
            );
            })}
      </div>
    );
  }
}

export default Mentors;
