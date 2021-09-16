import React from "react";
import "./AnimatedCircles.css";

const AnimatedCircles = () => {
  return (
    <ul className='circles'>
      {Array(11).fill().map((el, index) => <li key={index}></li>)}
    </ul>
  )
}

export default AnimatedCircles;