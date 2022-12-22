import React from 'react'
import './cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function Cart() {
    const data = [
        {
            id: 1,
            image1: 'https://picsum.photos/600/600?random=1',
            image2: 'https://picsum.photos/600/600?random=10',
            title: 'xac',
            isNew: true,
            oldPrice: 3,
            newPrice: 1,
        },
        {
            id: 2,
            image1: 'https://picsum.photos/600/600?random=2',
            image2: 'https://picsum.photos/600/600?random=20',
            title: 'cawec',
            isNew: false,
            oldPrice: 44,
            newPrice: 33,
        },
        
    ]

    return (

        <div className='cart'>
            <h1>My Shopping Cart</h1>
            {data?.map((item) => (
                <div className='item' key={item.id}>
                    <img className='cartImg' src={item.image1} />
                    <div>
                        <p> {item.title} </p>
                        <div> 1 x ${item.newPrice}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete'/>

                </div>
            ))}


            <div className='total'>
                <span>Subtotal</span>
                <span> $ 1234</span>
            </div>

<button> Checkout </button>
        </div>
    )
}

export default Cart

// 在使用map这个功能的时候，要把所有的内容放在一个div里，里面必须有key 