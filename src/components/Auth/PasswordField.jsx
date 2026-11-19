import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import TextField from "./TextField";

export default function PasswordField(props) {
  const [show, setShow] = useState(false);

  return (
    <TextField
      {...props}
      type={show ? "text" : "password"}
      suffix={
        <button
          type="button"
          className="field__toggle"
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          onClick={() => setShow(!show)}
        >
          {show ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      }
    />
  );
}