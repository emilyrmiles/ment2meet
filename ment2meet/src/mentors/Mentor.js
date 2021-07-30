import React from "react";
import "./Mentor.css";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mentor = props => {
  
    return (
        <div className="big-div">
            <div className="mentor-card-big-div">
                <div className ="card-image-big-div"> 
                    <img 
                    className='profile-pic-big-div'
                    src={props.src} alt="profile-pic"/>
                </div>

                <div className= 'card-content-big-div'>
                    <span style={{fontWeight: 'bold', fontSize:'16px'}}>{props.name} </span><br/>
                    <span style={{ color: 'grey' }}> {props.pronouns} </span><br/>
                    <span style={{fontWeight: 'bold'}}> {props.position} </span> at <span style={{fontWeight: 'bold'}}> {props.company} </span>
                    
                </div>
                <button><FontAwesomeIcon icon={faCommentAlt} /> Send a <span style={{fontWeight:'bold'}}>message</span></button>
                <button><FontAwesomeIcon icon={faPhoneAlt} /> Schedule a <span style={{fontWeight:'bold'}}>session</span></button>
            </div>
        </div>
    
  );
}

export default Mentor;
