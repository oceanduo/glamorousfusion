import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../commponents/List/List'
import './products.scss'

function Products() {

const catId = parseInt(useParams().id)

const [maxPrice, setMaxPrice]=useState(1000)
const [sort, setSort]=useState(null)

// console.log(useParams())
// 得到的是{id:"1"}, 还需要把string变成integer， parseInt

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2> Categories </h2>
          <input type='checkbox' id='1' value={1} />
          <label htmlFor='1'>Greenery</label>
          <input type='checkbox' id='2' value={2} />
          <label htmlFor='2'>Trees</label>
          <input type='checkbox' id='3' value={3} />
          <label htmlFor='3'>Flowers</label>
        </div>

        <div className='filterItem'>
          <h2> Filter by Price</h2>
          <span>0</span>
          <input type="range" min='0' max='1000' onChange={(e)=>{
            setMaxPrice(e.target.value)
            
          }}/>
          <span>{maxPrice}</span>
        </div>

        <div className='filterItem'>
          <h2> Sort by </h2>
          <input type='radio' id='asc' value='asc' name='price'  onChange={(e)=>{setSort("asc")}}/>
          <label htmlFor='asc'> Price (lowest first)</label>
          <input type='radio' id='des' value='des' name='price' onChange={(e)=>{setSort("des")}}/>
          <label htmlFor='des'> Price (highest first)</label>

          {/* 不能直接用for，要用htmlFor */}
        </div>
      </div>


      <div className='right'>
        <img className='catImg' src="https://picsum.photos/1600/200?random=8" alt='' />

        <List catId={catId} maxPrice={maxPrice} sort={sort} />

      </div>
    </div>
  )
}

export default Products