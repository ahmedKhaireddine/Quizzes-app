import _ from "lodash";

const FULL_NAME_REGEX = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.\'-]+$/;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@#!?&"]+(\.[^<>()%{}\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateAddInput = (email, full_name, questionId) => {
  const errors = [];

  if (_.isEmpty(questionId))
    errors.push({ key: "questionId", message: "The question id should not be empty."})
  else if(questionId.length !== 24)
    errors.push({ key: "questionId", message: "The question id must be a 24 character string."})

  if (full_name.trim() === "")
    errors.push({ key: "full_name", message: "First name must not be empty."})
  else if (!full_name.match(FULL_NAME_REGEX))
    errors.push({ key: "full_name", message: "Full name is not valid"})

  if (email.trim() === "")
    errors.push({ key: "email", message: "Last name must not be empty."})
  else if (!email.match(EMAIL_REGEX))
    errors.push({ key: "email", message: "Email is not valid."})

  return {
    errors: _.uniqBy(errors, "key"),
    valid: errors.length < 1
  };
}

export const validateUpdateInput = (_id, answers, score) => {
  const errors = [];

  if (_.isEmpty(_id))
    errors.push({ key: "_id", message: "Id must not be empty."})
  else if(_id.length !== 24)
    errors.push({ key: "_id", message: "Id must be a string of 24 characters."})

  if (_.isNaN(score))
    errors.push({ key: "score", message: "Score must be a number."})

  if (_.isEmpty(answers)) {
    errors.push({ key: "answers", message: "Answers must not be empty."})
  } else {
    answers.forEach(element => {
      if (!_.isObject(element)) {
        errors.push({ key: "answers", message: "Answers must be an array of objects."})
        return
      } else if (!_.has(element, "choice_id") && !_.has(element, "question_id")) {
        errors.push({ key: "answers", message: "All answers objects must contain the choice_id and the question_id."})
      }
    });
  }

  return {
    errors: _.uniqBy(errors, "key"),
    valid: errors.length < 1
  };
}