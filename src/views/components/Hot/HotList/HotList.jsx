import "./HotList.scss";
import HotProduct from "../HotProduct/HotProduct";
import { useState } from "react";

export default function HotList() {
  const [items, setItem] = useState([
    {
      id: 1,
      title: "All deserts",
      discont: "20% OFF",
      desc: "Deserty",
      img: '/src/assets/desert.png',
      alt: "Desert",
    },
    {
      id: 2,
      title: "Big Burgers",
      discont: "50% OFF",
      desc: "Fooddies",
      img: '/src/assets/burger.png',
      alt: "Burger",
    },
  ]);
  return (
    <div className="hot__list">
      {items && items.map((item, index) => {
        return (
          <HotProduct
            key={index}
            title={item.title}
            discont={item.discont}
            desc={item.desc}
            img={item.img}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
}
