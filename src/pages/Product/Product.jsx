import React, { useState } from 'react'
import './product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

function Product() {

  const img = [
    'https://picsum.photos/600/600?random=1',
    'https://picsum.photos/600/600?random=2',
    'https://picsum.photos/600/600?random=3',
  ]

  const [mainImg, setMainImg] = useState(img[0])
const [quantity, setQuantity] = useState(1)
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={img[0]} alt='' onClick={(e) => { setMainImg(e.target.src) }} />
          <img src={img[1]} alt='' onClick={(e) => { setMainImg(e.target.src) }} />
          <img src={img[2]} alt='' onClick={(e) => { setMainImg(e.target.src) }} />

        </div>
        <div className='mainImg'>
          <img src={mainImg} alt='' />
        </div>
      </div>


      <div className='right'>
        <h1>title</h1>
        <span className='price'>$300</span>
        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
        <div className='quantity'>
          <button onClick={(e)=>{ quantity>1 ? setQuantity(quantity-1) : setQuantity(1)  }}>-</button> {quantity} <button onClick={(e)=>{setQuantity(quantity+1) }}>+</button>
        </div>

        <button className='add'> <AddShoppingCartIcon/> Add to Cart</button>
        <div className='links'>
          <div className='item'> <FavoriteBorderIcon/> Add to Wish List </div>
          <div className='item'> <BalanceIcon/> Add to Compare</div>
        </div>
        

      </div>
    </div>
  )
}

export default Product