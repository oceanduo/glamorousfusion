import React from 'react'
import Categories from '../../commponents/Categary/Categary'
import Contact from '../../commponents/Contact/Contact'
import FeaturedProducts from '../../commponents/Featured/Featured'
import Slider from '../../commponents/Slider/Slider'

function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts types='Popular'/>
<Categories/>
      <FeaturedProducts types='New'/>
      <Contact/>
    </div>
  )
}

export default Home