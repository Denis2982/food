import CheckBox from '../../../components/Ui/CheckBox/CheckBox';
import './Notification.scss';

export default function Notification() {
  return (
    <div className="notification">
        <div className="notification__title">Email notifications</div>
        <div className="notification__checkbox-list">
            <CheckBox text='New deals' />
            <CheckBox text='Password changes' />
            <CheckBox text='New restaurants' />
            <CheckBox text='Special offers' />
            <CheckBox text='Order statuses' />
            <CheckBox text='Newsletter' />
        </div>
    </div>
  )
}
