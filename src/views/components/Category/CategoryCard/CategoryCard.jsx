import './CategoryCard.scss';

export default function CategoryCard({title, img, alt}) {
  return (
    <a className="category__card">
      <div className="category__img">
        <img src={img} alt={alt} />
      </div>
      <div className="category__title">{title}</div>
    </a>
  );
}
