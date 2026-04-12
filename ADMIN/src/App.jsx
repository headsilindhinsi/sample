import React from 'react'
import { BrowserRouter , Route, Routes} from "react-router-dom"
import AddTocart from './pages/AddTocart'
import ContextProvider from './context/ContextProvider'
import Grid from './pages/Grid'
import Users from './pages/Users'
import Buyer from './pages/Buyer'

const App = () => {
  return (
    <>
    
    <BrowserRouter>
     <ContextProvider>
       <Routes>
        <Route path='/' element={<AddTocart/>} />
        <Route path='/Grid' element={<Grid/>} />
        <Route path='/Users' element={<Users/>} />
        <Route path='/Buy' element={<Buyer/>} />
      </Routes>
     </ContextProvider>
  </BrowserRouter>   
   </>
  )
}

export default App