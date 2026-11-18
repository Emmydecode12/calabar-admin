import "./Button.css";

export default function Button({ variant = "primary", size = "md", children, ...rest }) {
  return (
    <button className={`btn btn--${variant} btn--${size}`} {...rest}>
      {children}
    </button>
  );
}