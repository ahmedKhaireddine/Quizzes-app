import React, { useEffect, useState } from "react";
import Questions from "../../questions.json";
import CircularTimer from "./core/CircularTimer";
import Button from "./core/Button"
import ChoiceList from "./core/ChoiceList";
import "./Room.css";

const Room = ({ setScore, setStep }) => {
  const [index, setIndex] = useState(0);
  const [choiceSelected, setChoiceSelected] = useState({});
  const [startQuiz, setStartQuiz] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [restart, setRestart] = useState(false);
  const { choices, title } = Questions[index];

  useEffect(() => {
    let sum = 0;

    if (answers.length > 0)
      sum = answers.map(answer => answer.weight).reduce((sum, value) => sum + value);

    setScore(sum);
  }, [answers])

  const timeElapsed = () => {
    if (index < Questions.length - 1) {
      setIndex(index + 1);
    } else {
      setStep(4);
    }
  }

  const next = () => {
    if (index < Questions.length - 1) {
      if (Object.keys(choiceSelected).length > 0) {
        setAnswers([...answers, choiceSelected]);
        setIndex(index + 1);
        setChoiceSelected({});
        setRestart(true);
      }
    } else {
      setStep(4);
    }
  }

  return (
    <div className="room-box">
      <h1>Quizzes !!!</h1>
      { startQuiz ? (
        <>
          <div class="header-room-box">
            <h2>{index + 1}. {title}</h2>
            <CircularTimer duration={30} onFunction={timeElapsed} restart={restart} setRestart={setRestart}/>
          </div>
          <ChoiceList
            className="choice-list"
            choices={choices}
            choiceSelected={choiceSelected}
            onFunction={setChoiceSelected}
          />
          <Button className="btn-room" onFunction={next}>Valider</Button>
        </>
      ) : (
          <>
            <p className="text-room">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi debitis deleniti odio assumenda laudantium, voluptatibus a vitae sed voluptatum nisi quidem ab rem aspernatur, doloribus animi optio et doloremque fugit?</p>
            <button className="btn-room" onClick={() => setStartQuiz(true)}>Commencer</button>
          </>
      )}
    </div>
  )
}

export default Room;