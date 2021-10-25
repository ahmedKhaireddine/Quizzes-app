import _ from "lodash";

const FULL_NAME_REGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.\'-]+$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@#!?&"]+(\.[^<>()%{}\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateAddInput = (email, full_name) => {
  const errors = {};

  if (full_name.trim() === "")
    errors.full_name = "First name must not be empty.";
  else if (!full_name.match(FULL_NAME_REGEX))
    errors.full_name = "Full name is not valid";

  if (email.trim() === "")
    errors.email = "Last name must not be empty.";
  else if (!email.match(EMAIL_REGEX))
    errors.email = "Email is not valid.";

  return {
    errors,
    valid: Object.keys(errors) < 1
  };
}

export const validateUpdateInput = (_id, answers, score) => {
  const errors = {};

  if (_.isEmpty(_id))
    errors._id = "Id must not be empty.";

  if (_.isNaN(score))
    errors.score = "Score must be a number.";

  if (_.isEmpty(answers))
    errors.answers = "Answers must not be empty.";
  else {
    answers.forEach(element => {
      if (!_.isObject(element)) {
        errors.answers = "Answers must be an array of objects.";
        return
      } else {
        if (!_.has(element, "choice_id") && !_.has(element, "question_id")) {
          errors.answers = "All answers objects must contain the choice_id and the question_id.";
          return
        }
      }
    });
  }

  return {
    errors,
    valid: Object.keys(errors) < 1
  };
}