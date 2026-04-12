import React from 'react'

import Navbar from '../components/Common_components/Navbar'
import Footer from '../components/Common_components/Footer'
import Carousel from '../components/Home_Components/Carousel'
// import Timer from '../components/Home_Components/Timer'
import Center from '../components/Home_Components/Center'
import Coloumn from '../components/Home_Components/Coloumn'
import PhotoGrapy from '../components/Home_Components/PhotoGrapy'
import Pricing from '../components/Home_Components/Pricing'
import Products from '../components/Home_Components/Products'
import LatestNews from '../components/Home_Components/LatestNews'
import Gallery from '../components/Home_Components/Gallery'



const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel/>
        <Gallery />
       {/* <Timer /> */}
       <Center />
        <Coloumn />
        <PhotoGrapy/>
        <Pricing />
        <Products />
        <LatestNews />
        <Footer/>
      
        
    </div>
  )
}

export default Home