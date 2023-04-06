import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../commponents/List/List'
import './products.scss'
import Navbar from '../../commponents/Navbar/Navbar'
import Footer from '../../commponents/Footer/Footer'


function Products() {

  // const catId = parseInt(useParams().id)

  const catId = useParams().id

  const [maxPrice, setMaxPrice] = useState(300)
  const [sort, setSort] = useState(null)
  const [selectedCats, setSelectedCats] = useState([catId]);

  console.log(catId)

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedCats(
      isChecked
        ? [...selectedCats, value]
        : selectedCats.filter((item) => item !== value)
    );
  };

  console.log(selectedCats)
  // 把它放到函数里外的出的结果不同，为什么呢


  //localhost:1337/api/cates?populate=*&[filters][title][$eq]=flower
  // console.log(res.data.data.[0].attributes.products.data)

  // console.log(useParams())
  // 得到的是{id:"1"}, 还需要把string变成integer， parseInt

  return (
    <>
      <Navbar />
      <div className='products'>
        <div className='left'>
          <div className='filterItem filter1'>
            <h2> Categories </h2>
            <input type='checkbox' id='1' value='greenery' checked={selectedCats.includes('greenery')} onChange={handleChange}  />
            <label htmlFor='1'>Greenery</label>

            <input type='checkbox' id='2' value='trees' checked={selectedCats.includes('trees')}  onChange={handleChange} />
            <label htmlFor='2' >Trees</label>

            <input type='checkbox' id='3' value='flower'  checked={selectedCats.includes('flower')} onChange={handleChange} />
            <label htmlFor='3'>Flowers</label>

            <input type='checkbox' id='4' value='garland'  checked={selectedCats.includes('garland')} onChange={handleChange} />
            <label htmlFor='3'>Garland</label>

            <input type='checkbox' id='5' value='assessories'  checked={selectedCats.includes('assessories')} onChange={handleChange} />
            <label htmlFor='3'>Assessories</label>
          </div>

          <div className='filterItem'>
            <h2> Filter by Price</h2>
            <span>0</span>
            <input type="range" min='0' max='300' onChange={(e) => {
              setMaxPrice(e.target.value)

            }} />
            <span>{maxPrice}</span>
          </div>

          <div className='filterItem filter1'>
            <h2> Sort by </h2>
            <input type='radio' id='asc' value='asc' name='price' onChange={(e) => { setSort("asc") }} />
            <label htmlFor='asc'> Price (lowest first)</label>
            <input type='radio' id='desc' value='desc' name='price' onChange={(e) => { setSort("des") }} />
            <label htmlFor='des'> Price (highest first)</label>

            {/* 不能直接用for，要用htmlFor */}
          </div>
        </div>


        <div className='right'>
          <img className='catImg' src="https://picsum.photos/1600/200?random=8" alt='' />

          <List catId={catId} maxPrice={maxPrice} sort={sort} selectedCats={selectedCats} />

        </div>
      </div>
      <Footer />
    </>

  )
}

export default Products


