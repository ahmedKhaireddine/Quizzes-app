import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    className,
    children,
    onFunction,
    type
  } = props;

  return (
    <button
      className={className}
      type={type}
      onClick={() => onFunction()}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: "class à definir",
  children: "Name a definir",
  onFunction: () => {},
  type: "button"
}

Button.protoTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onFunction: PropTypes.func,
  type: PropTypes.string
}

export default Button;