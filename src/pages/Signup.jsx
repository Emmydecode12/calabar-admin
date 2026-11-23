import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/Auth/AuthLayout";
import SignupForm from "../components/Auth/SignupForm";
import { login } from "../components/Auth/service";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Set up your admin access."
      footer={
        <>
          Already have an account? <Link to="/login">Log in</Link>
        </>
      }
    >
     <SignupForm
  onSuccess={(values) => {
    login({ email: values.email, password: values.password });
    navigate("/");
  }}
/>
    </AuthLayout>
  );
}