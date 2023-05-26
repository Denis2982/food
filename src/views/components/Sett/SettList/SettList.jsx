import { useState } from "react";
import AccountIcon from "../../../../components/Icons/AccountIcon";
import AddressIcon from "../../../../components/Icons/AddressIcon";
import PaymentIcon from "../../../../components/Icons/PaymentIcon";
import SecurityIcon from "../../../../components/Icons/SecurityIcon";
import SettCard from "../SettCard/SettCard";
import "./SettList.scss";

export default function SettList() {
  const [settings, setSetting] = useState([
    {
      id: 1,
      img: <AccountIcon />,
      title: "Account",
      subtitle: "Personal information",
      way: ':account',
    },
    {
        id: 2,
        img: <AddressIcon />,
        title: "Address",
        subtitle: "Shippings addresses",
        way: ':address',
      },
      {
        id: 3,
        img: <PaymentIcon />,
        title: "Payment method",
        subtitle: "Connected credit cards",
      },
      {
        id: 4,
        img: <SecurityIcon />,
        title: "Security",
        subtitle: "Password, 2FA",
      },
  ]);
  return (
    <div className="setting__list">
      <div className="setting__list-title">Settings</div>
      <div className="setting__list-cards">
        {settings &&
          settings.map((item) => {
            return (
              <SettCard
                key={item.id}
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                way={item.way}
              />
            );
          })}
      </div>
    </div>
  );
}
