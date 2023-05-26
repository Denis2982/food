import AddressList from '../AddressList/AddressList';
import ButtonList from '../ButtonList/ButtonList';
import Personal from '../Personal/Personal';
import './AddressView.scss';

export default function AddressView() {
  return (
    <div className="address-view">
      <div className="address-view__title">Address</div>
      <div className="address-view__inner">
        <AddressList />        
        <ButtonList />
      </div>
    </div>
  )
}
