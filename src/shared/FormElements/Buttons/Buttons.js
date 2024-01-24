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
        paddingRight : props.padding
      }}
      >{props.children}</button>
    </React.Fragment>
  )
}
export default Buttons;
