import React from "react";
import "./Form.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./avatar";
import { useState } from "react";

// eslint-disable-next-line no-empty-pattern
const Step1 = props => {
    const [preview, setPreview] = useState(null);
    function onCrop(pv) {
        setPreview(pv);
        props.handleChangeProfilePicture(pv)
    }
    function onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 2000000) {
        alert("File is too big!");
        elem.target.value = "";
        }
    }
    if (props.currentStep !== 1) {
      return null;
    }
  
    return (
    <div>
        <div className="form-container step1">
            <div className="form-title">
                <h1>Create an Account</h1>
                <p>Enter your personal information to begin.</p>
            </div>
            <div className="form-content">
                <div className="form-content-left">
                    <h5>Add a Profile Picture</h5>
                    <div>
                        {!preview ? 
                            <Avatar
                                width={250}
                                height={250}
                                onCrop={onCrop}
                                onBeforeFileLoad={onBeforeFileLoad}
                                src={null}
                            />
                            :
                            <div>
                                <img src={preview} alt="Preview" />
                                <br/>
                                Looking great!
                            </div>
                        }
                        
                        <br/>
                        
                        </div>
                </div>
                <div className="form-content-right">
                    <label for="name">What's your name?</label><br/>
                    <input type="text" class="input" id="name" name="name" placeholder="First and last name" value={props.name} onChange={props.handleChange}/><br/>
                    <label for="email">What's your email?</label><br/>
                    <input type="text" id="email" class="input" name="email" placeholder="Start typing..." value={props.email} onChange={props.handleChange}/><br/>
                    <label for="major">What you studying?</label><br/>
                    <input type="text" id="major" name="major" class="input" placeholder="Subject / Major" value={props.major} onChange={props.handleChange}/><br/>
                    <label for="password">Password</label><br/>
                    <input type="password" id="password" name="password" class="input" placeholder="8 characters minimum" value={props.password} onChange={props.handleChange}/><br/>
                    <input type="submit" value="Match me with mentors!"/>
                </div>
            </div>
            <div className="next"><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <div className="next-form">
            About<br/>Me
        </div>
    </div>
  );
}

export default Step1;
