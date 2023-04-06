import React, { useState, useEffect} from 'react'
import './product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import Navbar from '../../commponents/Navbar/Navbar'
import Footer from '../../commponents/Footer/Footer'
import database from '../../Data';


function Product() {
const dispatch = useDispatch();
const id =useParams().id;



  const [data, setData]=useState({})

  useEffect( ()=>{
  
    
  setData(database.filter(e=> e.id === Number(id)).[0])
  // 有没有别的办法呢？？
 },[])

console.log(data)

  
  const [quantity, setQuantity] = useState(1)
  const [mainImg, setMainImg] = useState(data.image1)
  
  
  return(
  <>
<Navbar/>
<div className='product'>
    <div className='left'>
       <div className='images'>
          <img src={data.image1} alt=''  onClick={() => { setMainImg(data.image1) }}/>

         <img src={data.image2} alt='' onClick={() => { setMainImg(data.image2) }} />

         
      </div>
      
      <div className='mainImg'>
        <img src={mainImg? mainImg : data.image1} alt='the main img' />
      </div>



    </div>

    <div className='right'>
        <h1> {data?.title}  </h1>
        <span className='price'>${data?.price}</span>
        <p>{data?.desc} </p>
        <div className='quantity'>
          <button onClick={(e)=>{ quantity>1 ? setQuantity(quantity-1) : setQuantity(1)  }}>-</button> {quantity} <button onClick={(e)=>{setQuantity(quantity+1) }}>+</button>
        </div>

        <button className='add'
        onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.title,
                    desc: data.desc,
                    price: data.price,
                    img: data.image1,
                    quantity,
                  })
                )
              }
              > <AddShoppingCartIcon/> Add to Cart</button>
        <div className='links'>
          <div className='item'> <FavoriteBorderIcon/> Add to Wish List </div>
          <div className='item'> <BalanceIcon/> Add to Compare</div>
        </div>
        

      </div>


  </div>
    <Footer/>

  </>
  )
  
    
  
}

export default Product



//   const [mainImg, setMainImg] = useState(img[0])
// const [quantity, setQuantity] = useState(1)
//   return (
//     <div className='product'>
//       <div className='left'>
//         <div className='images'>
//           <img src={"http://localhost:1337"+ data.attributes?.img?.data?.attributes?.url} alt='' onClick={(e) => { setMainImg(e.target.src) }} />
//           <img src={"http://localhost:1337"+ data.attributes?.img?.data2?.attributes?.url} alt='' onClick={(e) => { setMainImg(e.target.src) }} />
          

//         </div>
//         <div className='mainImg'>
//           <img src={mainImg} alt='' />
//         </div>
//       </div>


//       <div className='right'>
//         <h1>title</h1>
//         <span className='price'>$300</span>
//         <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
//         <div className='quantity'>
//           <button onClick={(e)=>{ quantity>1 ? setQuantity(quantity-1) : setQuantity(1)  }}>-</button> {quantity} <button onClick={(e)=>{setQuantity(quantity+1) }}>+</button>
//         </div>

//         <button className='add'> <AddShoppingCartIcon/> Add to Cart</button>
//         <div className='links'>
//           <div className='item'> <FavoriteBorderIcon/> Add to Wish List </div>
//           <div className='item'> <BalanceIcon/> Add to Compare</div>
//         </div>
        

//       </div>
//     </div>
//   )