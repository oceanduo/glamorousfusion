import React from 'react'
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeItem } from '../../redux/cartReducer';
import { resetCart } from '../../redux/cartReducer';


const Cart = () => {
    const products = useSelector((state) => state.cart.products);

      console.log(products);

      const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };


      const dispatch = useDispatch();


    //   total.toFixed(2)小数点后显示两位数

      
        // const stripePromise = loadStripe(
        //   "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
        // );
        // const handlePayment = async () => {
        //   try {
        //     const stripe = await stripePromise;
        //     const res = await makeRequest.post("/orders", {
        //       products,
        //     });
        //     await stripe.redirectToCheckout({
        //       sessionId: res.data.stripeSession.id,
        //     });
      
        //   } catch (err) {
        //     console.log(err);
        //   }
        // };
  

    return (

        <div className='cart'>
            <h1>My Shopping Cart</h1>
            {products?.map((item) => (
                <div className='item' key={item.id}>
                <img className='cartImg' src={item.img} />
                    <div>
                        <p> {item.title} </p>
                        <div> {item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete'  onClick={() => dispatch(removeItem(item.id))}/>

                </div>
            ))}


            <div className='total'>
                <span>Subtotal</span>
                <span> {totalPrice()} </span>
            </div>

<button> Checkout </button>

<span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>

        </div>
    )
}

export default Cart

{/* <img className='cartImg' src={"http://localhost:1337"+ data?.attributes?.img3?.data?.attributes?.url} /> */}

// 在使用map这个功能的时候，要把所有的内容放在一个div里，里面必须有key 

// const data = [
//     {
//         id: 1,
//         image1: 'https://picsum.photos/600/600?random=1',
//         image2: 'https://picsum.photos/600/600?random=10',
//         title: 'xac',
//         isNew: true,
//         oldPrice: 3,
//         newPrice: 1,
//     },
//     {
//         id: 2,
//         image1: 'https://picsum.photos/600/600?random=2',
//         image2: 'https://picsum.photos/600/600?random=20',
//         title: 'cawec',
//         isNew: false,
//         oldPrice: 44,
//         newPrice: 33,
//     },
    
// ]