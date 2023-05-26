import './SettCard.scss';
import { Link } from "react-router-dom";

export default function SettCard({img, title, subtitle, way}) {  
  return (
    <Link to={way} className="setting-card">
      <div className="setting-card__img">
        {img}        
      </div>
      <div className="setting-card-desc">
        <div className="setting-card__title">{title}</div>
        <div className="setting-card__text">{subtitle}</div>
      </div>
    </Link>
  )
}
