import { useState } from "react";
import { Button } from "../ui";
import TextField from "./TextField";
import PasswordField from "./PasswordField";
import "./Auth.css";

function validate({ name, email, password, confirm }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = "Enter your full name";
  }

  if (!email.trim()) {
    errors.email = "Enter your email address";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }

  if (!password) {
    errors.password = "Create a password";
  } else if (password.length < 8) {
    errors.password = "Use at least 8 characters";
  }

  if (!confirm) {
    errors.confirm = "Confirm your password";
  } else if (confirm !== password) {
    errors.confirm = "Passwords do not match";
  }

  return errors;
}

export default function SignupForm({ onSuccess }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess?.(values);
    }, 800);
  };

  return (
    <form className="auth__form" onSubmit={handleSubmit} noValidate>
      <TextField
        label="Full name"
        name="name"
        autoComplete="name"
        placeholder="Your full name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />

      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="admin@example.com"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <PasswordField
        label="Password"
        name="password"
        autoComplete="new-password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <PasswordField
        label="Confirm password"
        name="confirm"
        autoComplete="new-password"
        value={values.confirm}
        onChange={handleChange}
        error={errors.confirm}
      />

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}