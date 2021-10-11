import React, { useState } from "react";
import AnimatedCircles from "../components/quiz/AnimatedCircles";
import Room from "../components/quiz/Room";
import Search from "../components/quiz/Search";
import PlayerInfo from "../components/quiz/PlayerInfo";
import "./QuizArea.css";


const QuizArea = () => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState(0);

  const stepper = (step) => {
    switch (step) {
      case 1:
        return <Search setStep={setStep}/>
      case 2:
        return <PlayerInfo setStep={setStep}/>
      case 3:
        return <Room setScore={setScore} setStep={setStep} step={step}/>;
      case 4:
        return <h1 style={{ color: "white" }}>Step 4 and Score {score}</h1>;
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