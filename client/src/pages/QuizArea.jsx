import React, { useState } from "react";
import AnimatedCircles from "../components/quiz/AnimatedCircles";
import Room from "../components/quiz/Room";
import Search from "../components/quiz/Search";
import "./QuizArea.css";


const QuizArea = () => {
  const [step, setStep] = useState(2);
  const [score, setScore] = useState(0);

  const stepper = (step) => {
    switch (step) {
      case 1:
        return <Search />
      case 2:
        return <Room setScore={setScore} setStep={setStep} step={step}/>;
      case 3:
        return <h1 style={{ color: "white" }}>Step 3 and Score {score}</h1>;
      default:
        return <h1 style={{ color: "white" }}>Unknown step</h1>;
    }
  }

  return (
    <div className="container">
      {stepper(step)}
      <AnimatedCircles />
    </div>
  )
}

export default QuizArea;