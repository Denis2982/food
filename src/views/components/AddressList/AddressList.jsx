import InputPersona from '../../../components/Ui/InputPersona/InputPersona';
import Avatar from '../../../assets/persona.png';
import './AddressList.scss';

export default function AddressList() {
  return (
    <div className="address-list">
      <div className="address-list__title">Personal information</div>
      <div className="address-list__text">Avatar</div>
      <div className="address-list__avatar">
        <img src={Avatar} alt="persona" />
        <button className="address-list__btn _active" type="submit">Change</button>
        <button className="address-list__btn">Remove</button>
      </div>
      <div className="address-list__input">
        <InputPersona tipe='text' place='Ukraine' title='Сountry'/>
        <InputPersona tipe='text' place='Kyiv' title='Region'/>
        <InputPersona tipe='text' place='Kyiv' title='City'/>
        <InputPersona tipe='text' place='Saksaganskogo street' title='Street'/>
      </div>
    </div>
  )
}
