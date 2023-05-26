import Button from '../../../components/Ui/Button/Button';
import './ButtonList.scss';

export default function ButtonList() {
  return (
    <div className="btn-list">
        <Button clas='btn__log' title='Log out' />
        <Button clas='btn__discard' title='Discard changes' />
        <Button clas='btn__save' title='Save changes' />
    </div>
  )
}
