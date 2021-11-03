import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "./core/Button";
import Input from "./core/Input";
import "./Search.css";

const schema = yup.object({
  code: yup.string()
    .required("This field is require.")
}).required();

const Search = (props) => {
  const { setStep } = props;

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data)
    setStep(2)
  };

  return (
    <section className="search-box">
      <h1>Quizzes !!!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="search-input"
          error={errors["code"]?.message}
          name="code"
          placeholder="Code PIN Du Quizz"
          register={register}
          type="text"
        />
        <Button className="btn" type="submit">Valider</Button>
      </form>
    </section>
  )
}

export default Search;