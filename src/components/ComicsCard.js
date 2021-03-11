import React from 'react'
import './../css/ComicsCard.css'
import CardData from './CardData';

function Card(props) {
  return (
    <div className="homepage-list-columns">
      {CardData.map((photo, index) => {
        return (
          <div key={index} className="homepage-list-photo">
            <img className={'homepage-list-image'} src={photo.src} role="presentation" />
          </div>
        );
      })}
    </div>
  );
}

export default Card;
