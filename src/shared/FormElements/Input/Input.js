import React from 'react'
import "./Input.css"
const Input = (props) => {
  return (
    <input type={props.type} style={{ backgroundColor: props.backgroundColor, color: props.color }}
    onChange={(e)=>{props.setValue(e.target.value)}}
    >
    </input>
  )
}

export default Input
