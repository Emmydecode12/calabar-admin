import "./ProgressBar.css";

export default function ProgressBar({ value, max = 100 }) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div className="progress__fill" style={{ width: `${percent}%` }} />
    </div>
  );
}