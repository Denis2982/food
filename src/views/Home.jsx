import '../scss/home.scss';
import Category from './components/Category/CategoryList/CategoryList';
import HotList from './components/Hot/HotList/HotList';


export default function Home() {
  return (
    <div className="container home">
      <HotList />
      <Category />
      
    </div>
  )
}

