import React, { useState } from "react";
import Input from "./core/Input";
import "./PlayerInfo.css";

const PlayerInfo = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setStep } = props;

  return (
    <div class="info-box">
      <h1>Quizzes !!!</h1>
      <ul className="list-info-box">
        <li>
          <label for="name"> &raquo; Nom</label>
          <Input
            type="text"
            name="name"
            className="input-info-box"
            placeholder="Entrez votre réponse ici ..."
            onFunction={setName}
          />
        </li>
        <li>
          <label for="email"> &raquo; Email</label>
          <Input
            type="text"
            name="email"
            className="input-info-box"
            placeholder="name@exemple.com"
            onFunction={setEmail}
          />
        </li>
        <li>
          <button
            className="btn-info-box"
            onClick={() => setStep(3)}
          >Enregistrer</button>
        </li>
      </ul>
    </div>
  )
}

export default PlayerInfo;