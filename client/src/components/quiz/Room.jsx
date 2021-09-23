import React, { useEffect, useState } from "react";
import Questions from "../../questions.json";
import Button from "./core/Button"
import ChoiceList from "./core/ChoiceList";
import "./Room.css";

const Room = () => {
  const [index, setIndex] = useState(0);
  const [choiceSelected, setChoiceSelected] = useState({});
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const { choices, title } = Questions[index];

  useEffect(() => {
    let sum = 0;

    if (answers.length > 0)
      sum = answers.map(answer => answer.weight).reduce((sum, value) => sum + value);

    setScore(sum);
  }, [answers])


  const next = () => {
    if (Object.keys(choiceSelected).length > 0) {
      setAnswers([...answers, choiceSelected]);
      setIndex(index + 1);
      setChoiceSelected({});
    }
  }

  return (
    <div className="room-box">
      <h1>Quizzes !!!</h1>
      <h2>{index + 1}. {title}</h2>
      <ChoiceList
        className="choice-list"
        choices={choices}
        choiceSelected={choiceSelected}
        onFunction={setChoiceSelected}
      />
      <Button className="btn-room" onFunction={next}>Valider</Button>
    </div>
  )
}

export default Room;