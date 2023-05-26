import InputPersona from "../../../components/Ui/InputPersona/InputPersona";
import "./Personal.scss";
import Avatar from "/src/assets/persona.png";

export default function Personal() {
  return (
    <div className="personal">
      <div className="personal__title">Personal information</div>
      <div className="personal__text">Avatar</div>
      <div className="personal__avatar">
        <img src={Avatar} alt="persona" />
        <button className="personal__btn _active" type="submit">Change</button>
        <button className="personal__btn">Remove</button>
      </div>
      <div className="personal__input">
        <InputPersona tipe='text' place='Jane' title='First name'/>
        <InputPersona tipe='text' place='Robertson' title='Last name'/>
        <InputPersona tipe='email' place='jane.robertson@example.com' title='Email'/>
        <InputPersona tipe='tel' place='(217) 555-0113' title='Phone number'/>
      </div>
    </div>
  );
}
