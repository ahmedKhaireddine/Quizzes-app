export default (email, password) => {
  const errors = {};

  if (email.trim() === "")
    errors.email = "Email must not be empty.";

  if (password.trim() === "")
    errors.password = "Password must not be empty.";

  return {
    errors,
    valid: Object.keys(errors) < 1
  };
}