import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, children } = props;

  return <button
    className={className}
  >{children}</button>
}

Button.protoTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default Button;