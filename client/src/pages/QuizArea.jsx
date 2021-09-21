import React, { useState } from "react";
import AnimatedCircles from "../components/quiz/AnimatedCircles";
import Search from "../components/quiz/Search";
import "./QuizArea.css";

const stepper = (step) => {
  switch (step) {
    case 1:
      return <Search />
    case 2:
      return <h1 style={{ color: "white" }}>Step 2</h1>;
    case 3:
      return <h1 style={{ color: "white" }}>Step 3</h1>;
    default:
      return <h1 style={{ color: "white" }}>Unknown step</h1>;
  }
}

const QuizArea = () => {
  const [step, setStep] = useState(1)

  return (
    <div className="container">
      {stepper(step)}
      <AnimatedCircles />
    </div>
  )
}

export default QuizArea;