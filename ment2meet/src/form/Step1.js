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
                    <label for="fname">What's your name?</label><br/>
                    <input type="text" class="input" id="fname" name="fname" placeholder="First and last name"/><br/>
                    <label for="femail">What's your email?</label><br/>
                    <input type="text" id="femail" class="input" name="femail" placeholder="Start typing..."/><br/>
                    <label for="fmajor">What you studying?</label><br/>
                    <input type="text" id="fmajor" name="fmajor" class="input" placeholder="Subject / Major"/><br/>
                    <label for="fpassword">Password</label><br/>
                    <input type="text" id="fpassword" name="fpassword" class="input" placeholder="8 characters minimum"/><br/>
                    <input type="submit" value="Match me with mentors!"/>
                </div>
            </div>
            <div className="next" onClick={props.next}><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
        <div className="next-form" onClick={props.next}>
            About<br/>Me
        </div>
    </div>
  );
}

export default Step1;
