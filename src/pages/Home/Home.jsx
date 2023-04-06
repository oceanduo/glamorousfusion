import React from 'react'
import Categories from '../../commponents/Categary/Categary'
import Contact from '../../commponents/Contact/Contact'
import FeaturedProducts from '../../commponents/Featured/Featured'
import Slider from '../../commponents/Slider/Slider'
import Navbar from '../../commponents/Navbar/Navbar'
import Footer from '../../commponents/Footer/Footer'


function Home() {
  return (
    <div>
    <Navbar/>
      <Slider/>
      <FeaturedProducts types='trending'/>
      <Categories/>
      <FeaturedProducts types='featured'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home