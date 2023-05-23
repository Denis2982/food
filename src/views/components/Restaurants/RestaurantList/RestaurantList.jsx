import React, { useState } from 'react'
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantList.scss'

export default function RestaurantList() {
    const [items, setItem] = useState([
        {
          id: 1,
          title: "Royal Sushi House",      
          img: "/src/assets/restaurant__1.png",
          alt: "Pizza",
          time: '30-40 min',
          sum: '$32 min sum'
        },
        
      ]);
      return (
        <div className="restaurant__list">
          {items &&
            items.map((item, index) => {
              return (
                <RestaurantCard
                  key={index}
                  title={item.title}              
                  img={item.img}
                  alt={item.alt}
                  time={item.time}
                  sum={item.sum}
                />
              );
            })}
        </div>
      );
}
