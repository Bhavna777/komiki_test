import React from 'react'
import './../css/ComicsCard.css'

function Card(props) {
  return (
    <div className="ComicsCard">
        <div className="image">
          <img src={props.src} />
        </div>
        <div className="content">
            <p className="left">{props.category}</p>
            <h1> . </h1>
            <p className="right">{props.likes}</p>
        </div>
    </div>
  );
}

export default Card;
