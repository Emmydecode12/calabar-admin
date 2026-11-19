import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to manage the platform."
      footer={
        <>
          Need an account? <Link to="/signup">Sign up</Link>
        </>
      }
    >
     <LoginForm
  onSuccess={(values) => {
    login({ email: values.email });
    navigate("/");
  }}
/>
    </AuthLayout>
  );
}