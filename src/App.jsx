import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Ui/Header/Header'
import Home from './views/Home'
import Profile from './views/Profile'




function App() { 

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
