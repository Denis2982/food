import '../scss/home.scss';
import Category from './components/Category/CategoryList/CategoryList';
import HotList from './components/Hot/HotList/HotList';
import RestaurantList from './components/Restaurants/RestaurantList/RestaurantList';


export default function Home() {
  return (
    <div className="container home">
      <HotList />
      <Category />
      <RestaurantList />      
    </div>
  )
}

