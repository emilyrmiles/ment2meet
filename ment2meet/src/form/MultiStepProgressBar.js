import React from "react";
import "./MultiStepProgressBar.css";
import pinImage from './Vectorpin.svg';


const MultiStepProgressBar = props => {
  return (
      <div>
          <ul className="list-unstyled multi-steps">
                <li className={props.currentStep===1 ? 'is-active' : ''}>
                  {props.currentStep===1 ? <img src={pinImage} alt="pin" /> : null}
                  My Information
                </li>
                <li className={props.currentStep===2 ? 'is-active' : ''} >
                    {props.currentStep===2 ? <img src={pinImage} alt="pin" /> : null}
                    About Me
                </li>
                <li className={props.currentStep===3 ? 'is-active' : ''}>
                    {props.currentStep===3 ? <img src={pinImage} alt="pin" /> : null}
                    Mentor Preferences
                </li>
                <li className={props.currentStep===4 ? 'is-active' : ''}>
                    {props.currentStep===4 ? <img src={pinImage} alt="pin" /> : null}
                    View Your Matches
                </li>
          </ul>
      </div>
  );
};

export default MultiStepProgressBar;
