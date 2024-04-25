import React from 'react'
import "./Cards.css"
const Cards = (props) => {
  return (
    <div
      className="cards"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: props.border,
        borderRadius: props.borderRadius,
        height: props.height,
        boxShadow: props.boxShadow,
        width: props.width,
      }}
    >
      {props.children}
    </div>
  );
}

export default Cards;
