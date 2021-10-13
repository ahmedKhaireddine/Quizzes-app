import React, { useState } from "react";
import Button from "./core/Button";
import Input from "./core/Input";
import "./Search.css";

const Search = (props) => {
  const [code, setCode] = useState("");
  const { setStep } = props;
  const nextStep = () => setStep(2);

  return (
    <section className="search-box">
      <h1>Quizzes !!!</h1>
      <Input
        type="text"
        name="code"
        className="search-input"
        placeholder="Code PIN Du Quizz"
        onFunction={setCode}
      />
      <Button className="btn" onFunction={nextStep}>Valider</Button>
    </section>
  )
}

export default Search;