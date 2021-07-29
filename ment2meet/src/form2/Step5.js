import React from "react";
import "./Form.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUser, faBookOpen, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MentorCardItem from './MentorCardItem';

import polygon from './Polygon 1.svg';

// eslint-disable-next-line no-empty-pattern
const Step5 = props => {
    if (props.currentStep !== 5) {
      return null;
    }
    return (
    <div>
        <div className="previous-form" onClick={props.previous}>
            Mentor<br/>Preferences:<br/>Career
        </div>
        <div className="form-container step6">
            <div className="previous" onClick={props.previous}><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className="form-title">
                <h1>Review Your Information</h1>
                <p>You’re all set! Before you go please review the information you’ve submitted and you can always edit this later in My Profile & Mentor Preferences.</p>
            </div>
            <div className="form-content">
                <div className="form-content-left">
                    <img src={props.profilePicture} alt="avatar"/>
                </div>
                <div className="form-content-right">
                <div className="choices">
                        <img src={polygon} alt="polygon"/>    
                        <br/>
                        <span><span style={{ color: '#A981FF' }}><FontAwesomeIcon icon={faUser} /></span> Hello, my name is <span style={{ fontWeight: 'bold' }}> {props.name}</span>.</span><br/><br/>
                        <span><span style={{ color: '#A981FF' }}><FontAwesomeIcon icon={faBookOpen} /></span> I’m a student studying <span style={{ fontWeight: 'bold' }}> {props.major}</span>.</span><br/><br/>
                        <span><span style={{ color: '#A981FF' }}><FontAwesomeIcon icon={faClipboard} /></span> My ideal mentor is passionate about <span style={{ fontWeight: 'bold' }}> {props.passion1}</span>, <span style={{ fontWeight: 'bold' }}> {props.passion2}</span>, and <span style={{ fontWeight: 'bold' }}> {props.passion3}</span>. They work in <span style={{ fontWeight: 'bold' }}> {props.career1}</span>, <span style={{ fontWeight: 'bold' }}> {props.career2}</span> or <span style={{ fontWeight: 'bold' }}> {props.career3}</span>.</span>
                        
                        
                    </div>
                </div>
                <input type="submit" value="All set!"/>
            </div>
            <div className="next"><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <div className="next-form" onClick={props.next}>
        View<br/>Matches
        </div>
    </div>
  );
}

export default Step5;
