import React from 'react';
import './MentorCard.css';
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function MentorCardItem(props) {
  return (
    <div className="mentor-card">
        <div className ="card-image"> 
            <img 
             className='profile-pic'
             src={props.src} alt="profile-pic"/>
        </div>

        <div className= 'card-content'>
            <span style={{fontWeight: 'bold', fontSize:'16px'}}>{props.name} </span><br/>
            <span style={{ color: 'grey' }}> {props.pronouns} </span><br/>
            <span style={{fontWeight: 'bold'}}> {props.position} </span> at <span style={{fontWeight: 'bold'}}> {props.company} </span>
            
        </div>
        <button><FontAwesomeIcon icon={faCommentAlt} /> Send a <span style={{fontWeight:'bold'}}>message</span></button>
        <button><FontAwesomeIcon icon={faPhoneAlt} /> Schedule a <span style={{fontWeight:'bold'}}>session</span></button>
    </div>
  );
}

export default MentorCardItem;