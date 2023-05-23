import './HotProduct.scss';

export default function HotProduct({title, img, discont, desc, alt}) {
  return (
    <div className="hot-item">
        <div className="hot-item__img">
            <img src={img} alt={alt} />
        </div>
        <div className="hot-item__info">
            <div className="hot-item__title">{title}</div>
            <div className="hot-item__discont">{discont}</div>
            <div className="hot-item__desc">{desc}</div>
        </div>
    </div>
  )
}
