import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, children, onFunction } = props;

  return <button
    className={className}
    onClick={() => onFunction()}
  >{children}</button>
}

Button.defaultProps = {
  className: "class à definir",
  children: "Name a definir",
  onFunction: () => {}
}

Button.protoTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onFunction: PropTypes.func
}

export default Button;