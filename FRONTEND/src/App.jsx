import React from 'react'
import Home from './pages/Home'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import About_us from './components/Pages_Components/AboutUs_Components/About_us'
import ContextProvider from './context/ContextProvider'
import Shop from './pages/Shop'
import Register from './pages/Register'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Buy from './components/Common_components/Buy'
import Dynamic from './pages/Dynamic'
import Cart from './components/Home_Components/Cart'
import PortfolioHome from './components/portfolio_Components/PortfolioHome'
import Blog from './pages/Blog'
import Protect from './pages/Protect'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ContextProvider>
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path = "/Home" element={<Protect><Home /></Protect>} />
        <Route path = "/About-us" element={<About_us />} />
        <Route path= "/Contact" element = {<Contact/>} />
        <Route path="/Shop" element={<Shop />} />
        <Route path='/Buy/:id' element={<Buy/>} />
        <Route path='/product/:id' element={<Dynamic/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/buy' element={<Buy/>} />  
        <Route path='/PortFolio' element={<PortfolioHome/>} />  
        <Route path='/Blog' element={<Blog/>} />  

       </Routes>
      </ContextProvider>
      </BrowserRouter>
      

    </div>
  )
}

export default App  