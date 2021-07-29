import React, { Component } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import MultiStepProgressBar from "./MultiStepProgressBar";
import Step4 from "./Step4";
import Step5 from "./Step5";

import axios from "axios"; 

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      profilePicture: "",
      name: "",
      email: "",
      major: "",
      hours: "",
      superheroes: "",
      foods: "",
      stress: "",
      password: "",
      passion1: "",
      passion2: "",
      passion3: "",
      career1: "",
      career2: "",
      career3: ""
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.changeStep = this.changeStep(this);

    this.handleChangeSelectPassion1 = this.handleChangeSelectPassion1.bind(this);
    this.handleChangeSelectPassion2 = this.handleChangeSelectPassion2.bind(this);
    this.handleChangeSelectPassion3 = this.handleChangeSelectPassion3.bind(this);
    this.handleChangeProfilePicture = this.handleChangeProfilePicture.bind(this);
    this.handleChangeSelectCareer1 = this.handleChangeSelectCareer1.bind(this);
    this.handleChangeSelectCareer2 = this.handleChangeSelectCareer2.bind(this);
    this.handleChangeSelectCareer3 = this.handleChangeSelectCareer3.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleChangeSelectPassion1(e) {
    this.setState({ passion1: e.value });
  }
  handleChangeSelectPassion2(e) {
    this.setState({ passion2: e.value });
  }
  handleChangeSelectPassion3(e) {
    this.setState({ passion3: e.value });
  }
  handleChangeSelectCareer1(e) {
    this.setState({ career1: e.value });
  }
  handleChangeSelectCareer2(e) {
    this.setState({ career2: e.value });
  }
  handleChangeSelectCareer3(e) {
    this.setState({ career3: e.value });
  }
  handleChangeProfilePicture(e) {
    this.setState({ profilePicture: e });
    console.log(this.state.profilePicture);
  }
  onSubmit = async e => {
    e.preventDefault();
    const newUser = {
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        major:this.state.major
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const body = JSON.stringify(newUser);
      const response = await axios.post('http://localhost:5000/api/users', body, config);
      console.log(response.data);
    } catch (err) {
      console.error(err.response.data);
    }
}
onSubmit2 = async e => {
  e.preventDefault();
  try {
    const response = await axios.get('http://localhost:5000/api/mentor/fliter?major=}&passion1=dance&passion2=music&passion3=swim');
    console.log(response.data);
  } catch (err) {
    console.error(err.response.data);
  }
}

  // Trigger an alert on form submission
  /* handleSubmit = event => {
    event.preventDefault();
    const user = {
      //name: this.state.name,
      //email: this.state.email,
      //major: this.state.major,
      //password: this.state.password
      name: "a",
      email:"something@idjd.com",
      major: "sjidjjdi",
      password: "diuehudiuue"
    }
    
      axios.post('http://localhost:5000/api/users', {
	user
}, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
})
.then(response => { 
	console.log(response)
})
.catch(error => {
    console.log(error.response)
});
    console.log(`Your registration detail: \n 
      name: ${this.state.name} \n 
      email: ${this.state.email} \n 
      major: ${this.state.major} \n 
      hours: ${this.state.hours} \n 
      superheroes: ${this.state.superheroes} \n 
      foods: ${this.state.foods} \n 
      stress: ${this.state.stress} \n 
      password: ${this.state.password} \n 
      passion1: ${this.state.passion1} \n 
      passion2: ${this.state.passion2} \n 
      passion3: ${this.state.passion3} \n 
      career1: ${this.state.career1} \n 
      career2: ${this.state.career2} \n 
      career3: ${this.state.career3} \n 
      `);
  }; */
  

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  changeStep(number) {
    let currentStep = this.state.currentStep;
    currentStep = number;
    this.setState({
      currentStep: currentStep
    });
  }

  render() {

    return (
      <>
          <MultiStepProgressBar 
            currentStep={this.state.currentStep} 
            changeStep={this.changeStep} 
            handleChange={this.handleChange}/>
          <div>
            <form onSubmit={this.onSubmit}>
              <Step1
                next={this._next}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                profilePicture={this.state.profilePicture}
                name={this.state.name}
                email={this.state.email}
                major={this.state.major}
                password={this.state.password}
                handleChangeProfilePicture = {this.handleChangeProfilePicture}
              />
            </form>
            <form onSubmit={this.onSubmit2}>
              <Step2
                next={this._next}
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                hours={this.state.hours}
                superheroes={this.state.superheroes}
                foods={this.state.foods}
                stress={this.state.stress}
              />
              <Step3
                next={this._next}
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                passion1={this.state.passion1}
                passion2={this.state.passion2}
                passion3={this.state.passion3}
                handleChangeSelectPassion1={this.handleChangeSelectPassion1}
                handleChangeSelectPassion2={this.handleChangeSelectPassion2}
                handleChangeSelectPassion3={this.handleChangeSelectPassion3}
              />
              <Step4
                next={this._next}
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                career1={this.state.career1}
                career2={this.state.career2}
                career3={this.state.career3}
                handleChangeSelectCareer1={this.handleChangeSelectCareer1}
                handleChangeSelectCareer2={this.handleChangeSelectCareer2}
                handleChangeSelectCareer3={this.handleChangeSelectCareer3}
              />
              <Step5
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
              />
              </form>
          </div>        
      </>
    );
  }
}

export default MasterForm;
