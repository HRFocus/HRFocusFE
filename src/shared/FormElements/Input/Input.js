import React from 'react'
import "./Input.css"
const Input = (props) => {
  return (
    <input type={props.type} style={{backgroundColor:props.backgroundColor,color:props.color}} >
    </input>
  )
}

export default Input
