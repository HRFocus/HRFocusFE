import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: props.border,
        borderRadius: props.borderRadius,
        padding:props.padding
      }}
      onChange={(e) => {
        props.setValue(e.target.value);
      }}
    ></input>
  );
};

export default Input;
