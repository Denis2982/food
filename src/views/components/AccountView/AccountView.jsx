import ButtonList from "../ButtonList/ButtonList";
import Notification from "../Notification/Notification";
import Personal from "../Personal/Personal";
import "./AccountView.scss";

export default function AccountView() {
  return (
    <div className="account-view">
      <div className="account-view__title">Account</div>
      <div className="account-view__inner">
        <Personal />
        <Notification />
        <ButtonList />
      </div>
    </div>
  );
}
