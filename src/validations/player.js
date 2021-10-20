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