import { useId } from "react";
import "./TextField.css";

export default function TextField({ label, error, labelAction, suffix, ...rest }) {
  const id = useId();

  return (
    <div className="field">
      <div className="field__top">
        <label htmlFor={id} className="field__label">{label}</label>
        {labelAction}
      </div>

      <div className={`field__box ${error ? "field__box--error" : ""}`}>
        <input
          id={id}
          className="field__input"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          {...rest}
        />
        {suffix}
      </div>

      {error && <p id={`${id}-error`} className="field__error">{error}</p>}
    </div>
  );
}