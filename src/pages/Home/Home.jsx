import React from 'react'
import Categories from '../../commponents/Categary/Categary'
import FeaturedProducts from '../../commponents/Featured/Featured'
import Slider from '../../commponents/Slider/Slider'

function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts types='Popular'/>
<Categories/>
      <FeaturedProducts types='New'/>
    </div>
  )
}

export default Home