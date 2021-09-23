import React from "react";
import PropTypes from 'prop-types';

const ChoiceList = (props) => {
  const { choices, className, choiceSelected, onFunction } = props;

  const choicesItemsJsx = choices.map(({ id, value, weight }) => {
    const answer = { choiceId: id, questionId: id, weight };
    let selected = false

    if (Object.keys(choiceSelected).length > 0 && id === choiceSelected.choiceId) selected = true;

    return <li
      key={id}
      style={{ backgroundColor: selected && "rgba(57, 187, 182, 1)"}}
      onClick={() => onFunction(answer)}
    > &laquo; {value} &raquo; </li>
  });

  return <ul className={className}>{choicesItemsJsx}</ul>
}

ChoiceList.defaultProps = {
  choices: [],
  className: "class à definir",
  choiceSelected: {},
  onFunction: () => {}
}

ChoiceList.protoTypes = {
  choices: PropTypes.array.isRequired,
  className: PropTypes.string,
  choiceSelected: PropTypes.array.isRequired,
  onFunction: PropTypes.func
}

export default ChoiceList;