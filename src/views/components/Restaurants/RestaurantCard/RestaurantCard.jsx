import BoxIcon from "../../../../components/Icons/BoxIcon";
import "./RestaurantCard.scss";
import Clock from "/src/assets/clock.svg";

export default function RestaurantCard({ img, title, time, sum, alt, tags }) {
  return (
    <a className="restaurant__card">
      <div className="restaurant__img">
        <img src={img} alt={alt} />
      </div>
      <div className="restaurant__inner">
        <div className="restaurant__top-desc">
          <div className="restaurant__title">{title}</div>
          <div className="restaurant__busket">
            <BoxIcon />
          </div>
        </div>
        <div className="restaurant__desc">
          <div className="restaurant__desc-time">
            <img src={Clock} alt="Clock" />
            <span>{time}</span>
          </div>
          <div className="restaurant__desc-sum">{sum}</div>
        </div>
        <div className="restaurant__category-list">
          {tags.map((tag) => {
            return (
              <div className="restaurant__category">
                <div className="restaurant__category-img">
                  <img src={tag.view} alt="Pizza" />
                </div>
                <div className="restaurant__category-title">{tag.surname}</div>
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
}
