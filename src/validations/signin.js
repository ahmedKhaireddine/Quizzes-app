const EMAIL_REGEX = /^(?=.{1,64}@)[\w-\.]+@([a-z-]+\.)+[a-z-]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

export default (email, first_name, last_name, password, confirmPassword) => {
  const errors = {};

  if (first_name.trim() === "")
    errors.first_name = "First name must not be empty.";

  if (last_name.trim() === "")
    errors.last_name = "Last name must not be empty.";

  if (email.trim() === "")
    errors.email = "Email must not be empty.";
  else if (!email.match(EMAIL_REGEX))
    errors.email = "Email must be a valid email address";

  if (password.trim() === "")
    errors.password = "Password must not be empty.";
  else if (password !== confirmPassword)
    errors.password = "Password must match.";
  else if (!password.match(PASSWORD_REGEX))
    errors.password = "Password must match with regex.";

  return {
    errors,
    valid: Object.keys(errors) < 1
  };
}