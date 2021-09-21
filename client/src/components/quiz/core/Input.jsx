import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    type, name, className, placeholder, onFunction
  } = props;

  return <input
    type={type}
    name={name}
    className={className}
    placeholder={placeholder}
    onChange={(e) => onFunction(e.target.value)}
  />
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onFunction: PropTypes.func
}

export default Input;