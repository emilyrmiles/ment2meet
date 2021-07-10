import React from "react";
import "./Card.css";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ categories, title, date, time, mentors }) {
  return (
    <div className="card-container">
      <div className="card-top">
        <div className="card-categories">
          {categories.map((category) => {
            return <div className="card-category">{category}</div>;
          })}
        </div>
        <div className="card-add-calendar">
          <p>Add to Calendar</p>
        </div>
      </div>
      <div>
        <h1 className="card-title">{title}</h1>
      </div>
      <div className="card-time">
        <FontAwesomeIcon icon={faCalendar} />
        <span>{date}</span>
      </div>
      <div className="card-time">
        <FontAwesomeIcon icon={faClock} />
        <span>{time}</span>
      </div>
      <h4>Hosting Mentors</h4>
      <div className="card-mentors">
        {mentors.map((mentor) => {
          return (
            <div className="card-mentor">
              <div className="card-mentor-photo">
                <img alt = "mentorphoto" src={mentor.photo} width="69" height="69" />
              </div>
              <div className="card-mentor-right">
                <div className="card-mentor-name">{mentor.name}</div>
                <hr className="card-mentor-line" />
                <p>{mentor.position}</p>
                <p>{mentor.work}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
