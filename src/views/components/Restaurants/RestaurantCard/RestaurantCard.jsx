import BoxIcon from '../../../../components/Icons/BoxIcon';
import './RestaurantCard.scss';
import Clock from '/src/components/Icons/ClockIcon';

export default function RestaurantCard({img, alt, title, time, sum}) {
  return (
    <a className="restaurant__card">
        <div className="restaurant__img">
            <img src={img} alt={alt} />
        </div>
        <div className="restaurant__top-desc">
            <div className="restaurant__title">{title}</div>
            <div className="restaurant__busket">
                <BoxIcon />
                <div className="restaurant__busket-count">0</div>
            </div>
        </div>
        <div className="restaurant__desc">
            <img src={Clock} alt="Clock" />
            <div className="restaurant__desc-time">{time}</div>
            <div className="restaurant__desc-sum">{sum}</div>
        </div>
        <div className="restaurant__category">

        </div>
    </a>
  );
};
