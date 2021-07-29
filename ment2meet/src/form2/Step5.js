import React from "react";
import "./Form.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MentorCardItem from './MentorCardItem';

import img4 from '../assets/test-lizzie.jpg';

// eslint-disable-next-line no-empty-pattern
const Step5 = props => {
    if (props.currentStep !== 5) {
      return null;
    }
    return (
    <div>
        <div className="previous-form" onClick={props.previous}>
            Mentor<br/>Preferences:<br/>Passion
        </div>
        <div className="form-container step5">
            <div className="previous" onClick={props.previous}><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className="form-title">
                <h1>Mentors Matched For You</h1>
                <p>Based on your profile, here are the top {props.mentors.length} mentors that matches your mentor preferences. To kickstart your mentorship, we recommend scheduling a mentoring session with one of them..</p>
            </div>
            <div className="form-content">
                {props.mentors.map((mentor) => {
                return (
                    <MentorCardItem
                    src = {img4}
                    name = {mentor.name}
                    pronouns = {mentor.pronounce}
                    position = {mentor.position}
                    company = {mentor.company}/>
                );
                })}
                
            </div>
        </div>
    </div>
  );
}

export default Step5;
