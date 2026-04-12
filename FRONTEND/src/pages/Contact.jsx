import React from 'react'
import Hero from '../components/Contact_Components/Hero'
import Info from '../components/Contact_Components/Info'
import Navbar from '../components/Common_components/Navbar'
import Footer from '../components/Common_components/Footer'
import Form from '../components/Contact_Components/Form'
import Map from '../components/Contact_Components/Map'

const Contact = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Info />
    <Form />
    <Map />
    <Footer />
    </>
  )
}

export default Contact