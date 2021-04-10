import React from "react"

export const Welcome: React.FC = (props) => {
  return(
    <h1> Hello, {props.name} 今は{props.age}歳だそうで</h1>
  )
}