import React, { useState } from "react";
import "./Form.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formImage from './Saly-14.png';
import background from './Vector 132.svg';
import polygon from './Polygon 1.svg';
import ReactDOM from "react-dom";
import MultiSelect from "react-multi-select-component";



// eslint-disable-next-line no-empty-pattern
const Step3 = props => {
    if (props.currentStep !== 3) {
      return null;
    }
    
    const options = [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry" }
      ];
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState([]);
    
    return (
    <div>
        <div className="previous-form" onClick={props.previous}>
            About<br/>Me
        </div>
        <div className="form-container step3">
            <div className="previous" onClick={props.previous}><FontAwesomeIcon icon={faArrowLeft} /></div>
            <div className="form-title">
                <h1>Mentor Preferences</h1>
                <p>Tell us about your ideal mentor.</p>
            </div>
            <div className="form-content">
                <div className="form-content-left">
                    <img src={formImage} alt="Saly-14"/>
                </div>
                <div className="form-content-right">
                    <div className="choices">
                        <img src={polygon} alt="polygon"/>    
                        <p>My mentor is passionate about...</p>
                        <pre>{JSON.stringify(selected)}</pre>
                        <MultiSelect
                            options={options}
                            selected={selected}
                            onChange={setSelected}
                            labelledBy={"Select"}
                        />
                    </div>
                </div>
            </div>
            <img className="purple" src={background} alt="background-purple"/>
            <div className="next" onClick={props.next}><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <div className="next-form" onClick={props.next}>
            Mentor<br/>Preferences:<br/>Career
        </div>
    </div>
  );
}

export default Step3;
