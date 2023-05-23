import BoxIcon from '../../../../components/Icons/BoxIcon'
import './RestaurantCard.scss'

export default function RestaurantCard() {
  return (
    <a className="restaurant__card">
        <div className="restaurant__img"></div>
        <div className="restaurant__top-desc">
            <div className="restaurant__title">{title}</div>
            <div className="restaurant__busket">
                <BoxIcon />
                <div className="restaurant__busket-count">0</div>
            </div>
        </div>
        <div className="restaurant__desc"></div>
        <div className="restaurant__category">

        </div>
    </a>
  )
}
