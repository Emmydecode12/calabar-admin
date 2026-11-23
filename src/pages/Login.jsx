import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

export default function Login() {

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
      <LoginForm/>
    </AuthLayout>
  );
}