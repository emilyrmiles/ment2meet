import React from "react";
import "./card.css";

function Card({ title, description }) {
  return (
    <div className="card-container">
      <div className="card-top">
      </div>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
