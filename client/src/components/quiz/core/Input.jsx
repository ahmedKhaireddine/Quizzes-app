import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = (props) => {
  const {
    className,
    error,
    label,
    name,
    placeholder,
    register,
    type
  } = props;

  return(
    <>
      { label &&  <label htmlFor={name}> {label} </label> }
      <input
        className={className}
        placeholder={placeholder}
        {...register(name)}
        type={type}
      />
      { error &&
        <small className="errors">
          <span className="material-icons-round">warning</span>
          <span>{error}</span>
        </small>
      }
    </>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default Input;