import { Home } from "lucide-react";
import "./AuthLayout.css";

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth">
      <div className="auth__card">
        <div className="auth__brand">
          <span className="auth__logo">
            <Home size={22} />
          </span>
          <span className="auth__name">Calabar Homes</span>
        </div>

        <h1 className="auth__title">{title}</h1>
        <p className="auth__subtitle">{subtitle}</p>

        {children}

        {footer && <div className="auth__footer">{footer}</div>}
      </div>
    </div>
  );
}