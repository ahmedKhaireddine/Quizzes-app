import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    className, name, onFunction, placeholder, type
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
  className: PropTypes.string,
  name: PropTypes.string,
  onFunction: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

export default Input;