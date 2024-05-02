import React from "react";
import "./Buttons.css"
const Buttons = (props) => {
  return (
    <React.Fragment>
      <button
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        paddingLeft : props.padding,
        paddingRight : props.padding,
        width: props.width,
        height : props.height,
        borderRadius: props.borderRadius,
        marginLeft:props.marginLeft
      }}
        type={props.type}
        onClick={props.handleClick}
      >{props.children}</button>
    </React.Fragment>
  )
}
export default Buttons;
