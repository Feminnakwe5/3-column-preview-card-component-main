import React from 'react';

function Card(props) {
  return (
    <div className={props.title}>
      <img src={props.img} />
      <h1>{props.title}</h1>
      <p className='text'> {props.text}</p>
      <div className='Learn'>Learn More</div>
    </div>
  );
}

export default Card;
