import React from 'react';
import "../Assets/CSS/AttributeDetails.css";

function AttributeDetails(props) {
    return (
      <div className="des">
        <h3>{props.name}</h3>
        <h6>Cost: <span id="cost">{props.cost}</span></h6>
        <p>{props.description}</p>
      </div>
    );
}

export default AttributeDetails;