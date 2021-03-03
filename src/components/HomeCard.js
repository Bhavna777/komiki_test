import React from 'react'
import './../css/HomeCard.css'

function Card(props) {
  return (
    <div className="Card">
        <div className="image">
          <img src={props.src} />
        </div>
    </div>
  );
}

export default Card;
