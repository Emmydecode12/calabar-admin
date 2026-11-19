import { useState } from "react";
import { Button } from "../ui";
import TextField from "./TextField";
import PasswordField from "./PasswordField";
import "./Auth.css";

function validate({ email, password }) {
  const errors = {};

  if (!email.trim()) {
    errors.email = "Enter your email address";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }

  if (!password) {
    errors.password = "Enter your password";
  }

  return errors;
}

export default function LoginForm({ onSuccess }) {
  const [values, setValues] = useState({ email: "", password: "" });
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
        autoComplete="current-password"
        labelAction={<a href="#">Forgot password?</a>}
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <Button type="submit" size="lg" disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </Button>
    </form>
  );
}