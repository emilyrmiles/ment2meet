import React, { Component } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";

import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      email: "",
      username: "",
      password: ""
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.changeStep = this.changeStep(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
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

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <div color="primary float-right">Submit</div>;
    }
    // ...else render nothing
    return null;
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
                email={this.state.email}
              />
              <Step2
                next={this._next}
                previous={this._prev}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
              />
            <div>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default MasterForm;
