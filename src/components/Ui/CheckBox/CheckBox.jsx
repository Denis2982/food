import "./CheckBox.scss";
import CheckMarckIcon from "../../Icons/CheckMarckIcon";
import { useState } from "react";

export default function CheckBox({ text }) {
  const [checked, setChecked] = useState(true);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className="checkbox__checkmark">
        <CheckMarckIcon />
      </span>
      <span className="checkbox__text">{text}</span>
    </label>
  );
}
