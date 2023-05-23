import { useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.scss";

export default function Category() {
  const [items, setItem] = useState([
    {
      id: 1,
      title: "Pizza",      
      img: "/src/assets/pizza.png",
      alt: "Pizza",
    },
    {
      id: 2,
      title: "Burger",      
      img: "/src/assets/burger-category.png",
      alt: "Burger",
    },
    {
      id: 3,
      title: "BBQ",      
      img: "/src/assets/meat-category.png",
      alt: "BBQ",
    },
    {
      id: 4,
      title: "Sushi",      
      img: "/src/assets/sushi-category.png",
      alt: "Sushi",
    },
    {
      id: 5,
      title: "Vegan",      
      img: "/src/assets/broccoli-category.png",
      alt: "Vegan",
    },
    {
      id: 6,
      title: "Desserts",      
      img: "/src/assets/cake.png",
      alt: "Desserts",
    },
  ]);
  return (
    <div className="category__inner">
      {items &&
        items.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              title={item.title}              
              img={item.img}
              alt={item.alt}
            />
          );
        })}
    </div>
  );
}
