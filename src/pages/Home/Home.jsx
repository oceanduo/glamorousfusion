import React from 'react'
import FeaturedProducts from '../../commponents/Featured/Featured'
import Slider from '../../commponents/Slider/Slider'

function Home() {
  return (
    <div>
      <Slider/>
      <FeaturedProducts types='Popular'/>

      <FeaturedProducts types='New'/>
    </div>
  )
}

export default Home