import './RestaurantCat.scss'

export default function RestaurantCat({title, img, alt}) {
  return (
    <div className="restaurant__category">
        <img src={img} alt={alt} />
        <div className="restaurant__category-title">{title}</div>
    </div>
  )
}
