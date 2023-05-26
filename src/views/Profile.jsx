import { Route, Routes } from "react-router-dom";
import "../scss/profile.scss";
import AccountView from './components/AccountView/AccountView';
import AddressView from "./components/AddressView/AddressView";
import SettList from "./components/Sett/SettList/SettList";

export default function Profile() {
  return (
    <div className="container profile">
      <SettList />
      <Routes>
        <Route path=":account" element={<AccountView />} />
        <Route path="/:address" element={<AddressView />} />
      </Routes>
    </div>
  );
}
