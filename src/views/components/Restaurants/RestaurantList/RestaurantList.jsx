import { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./RestaurantList.scss";

export default function RestaurantList() {
  const [restaurant, setRestaurant] = useState([
    {
      id: 1,
      title: "Royal Sushi House",
      img: "/src/assets/restaurant__1.png",
      time: "30-40 min",
      sum: "$32 min sum",
      alt: 'lhjh',
      tags: [
        {          
          view: "/src/assets/sushi-category.png",
          surname: "Sushi",
        },
      ],
    },
    {
      id: 2,
      title: "Burgers & Pizza",
      img: "/src/assets/restaurant__2.png",
      time: "40-60 min",
      sum: "$24 min sum",
      alt: 'Burgers & Pizza',
      tags: [
        {          
          view: "/src/assets/burger-category.png",
          surname: "Burger",
        },
        {          
          view: "/src/assets/pizza.png",
          surname: "Pizza",
        },
      ],
    },
    {
      id: 3,
      title: "Ninja sushi",
      img: "/src/assets/restaurant__3.png",
      time: "20-40 min",
      sum: "$40 min sum",
      alt: 'Ninja sushi',
      tags: [
        {          
          view: "/src/assets/sushi-category.png",
          surname: "Sushi",
        },
      ],
    },
    {
      id: 4,
      title: "Sushi master",
      img: "/src/assets/restaurant__4.png",
      time: "60-70 min",
      sum: "$49 min sum",
      alt: 'Sushi master',
      tags: [
        {          
          view: "/src/assets/sushi-category.png",
          surname: "Sushi",
        },
      ],
    },
    {
      id: 5,
      title: "Japanese sushi",
      img: "/src/assets/restaurant__5.png",
      time: "30-50 min",
      sum: "$104 min sum",
      alt: 'Japanese sushi',
      tags: [
        {          
          view: "/src/assets/sushi-category.png",
          surname: "Sushi",
        },
      ],
    },
    {
      id: 6,
      title: "Kobe",
      img: "/src/assets/restaurant__6.png",
      time: "20-30 min",
      sum: "$57 min sum",
      alt: 'Kobe',
      tags: [
        {          
          view: "/src/assets/sushi-category.png",
          surname: "Sushi",
        },
      ],
    },
    
  ]);
  return (
    <>
      <div className="restaurant__list-title">Nearby restaurants</div>
      <div className="restaurant__list">
        {restaurant &&
          restaurant.map((item) => {
            return (
              <RestaurantCard
                key={item.id}
                title={item.title}
                img={item.img}
                time={item.time}
                sum={item.sum}
                tags={item.tags}
              />
            );
          })}
      </div>
    </>
  );
}
