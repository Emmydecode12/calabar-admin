import "./Badge.css";

export default function Badge({ tone = "warning", children }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}