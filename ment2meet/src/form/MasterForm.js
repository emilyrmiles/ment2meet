import React, { Component } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

import MultiStepProgressBar from "./MultiStepProgressBar";
import Step4 from "./Step4";
import Step5 from "./Step5";

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
      password: "",
      passion1: "",
      passion2: "",
      passion3: ""
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
    this.handleChangeName = this.handleChangeName.bind(this);
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
  handleChangeProfilePicture(e) {
    this.setState({ profilePicture: e });
    console.log(this.state.profilePicture);
  }
  handleChangeName(e){
    this.setState({ name: e.value });
  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
  };

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
        <form onSubmit={this.handleSubmit}>
          <MultiStepProgressBar 
            currentStep={this.state.currentStep} 
            changeStep={this.changeStep} 
            handleChange={this.handleChange}/>
          <div>
              <Step1
                next={this._next}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                profilePicture={this.state.profilePicture}
                name={this.state.name}
                email={this.state.email}
                major={this.state.major}
                handleChangeProfilePicture = {this.handleChangeProfilePicture}
                handleChangeName = {this.handleChangeName}
              />
              <Step2
                next={this._next}
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
              />
              <Step3
                next={this._next}
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
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
                email={this.state.username}
                passion1={this.state.passion1}
                passion2={this.state.passion2}
                passion3={this.state.passion3}
                handleChangeSelectPassion1={this.handleChangeSelectPassion1}
                handleChangeSelectPassion2={this.handleChangeSelectPassion2}
                handleChangeSelectPassion3={this.handleChangeSelectPassion3}
              />
              <Step5
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
              />
          </div>
        </form>
      </>
    );
  }
}

export default MasterForm;
