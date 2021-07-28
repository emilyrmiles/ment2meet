import React from "react";
import "./Form.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formImage from './Saly-16.png'; // Tell Webpack this JS file uses this image


// eslint-disable-next-line no-empty-pattern
const Step2 = props => {
    if (props.currentStep !== 2) {
      return null;
    }
  
    return (
    <div>
        <div className="previous-form" onClick={props.previous}>
            My<br/>Information
        </div>
        <div className="form-container step2">
            <div className="previous" onClick={props.previous}><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className="form-title">
                <h1>About Me</h1>
                <p>Answer a few questions to help mentors get to know you.</p>
            </div>
            <div className="form-content">
                <label for="f25hours">There are now 25 hours in a day! How do you spend your extra hour?</label><br/>
                <input type="text" class="input" id="f25hours" name="f25hours" placeholder="Your response here"/><br/>
                <label for="fsuperheroes">If all the superheroes went to battle against each other, who do you think would win?</label><br/>
                <input type="text" id="fsuperheroes" class="input" name="fsuperheroes" placeholder="Your response here"/><br/>
                <label for="ffoods">If you could only pick three foods to eat for a month, which foods would you choose?</label><br/>
                <input type="text" id="ffoods" name="ffoods" class="input" placeholder="Your response here"/><br/>
                <label for="fstress">What activity helps you relieve stress?</label><br/>
                <input type="text" id="fstress" name="fstress" class="input" placeholder="Your response here"/><br/>
                <img src={formImage} alt="Saly-16"/>
            </div>
            <div className="next" onClick={props.next}><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <div className="next-form" onClick={props.next}>
        Mentor<br/>Preferences:<br/>Passions
        </div>
    </div>
  );
}

export default Step2;
