
import React from "react";
import Card from "../Card/Card";

import "./featured.scss";


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
  {
    id: 3,
    image1: 'https://picsum.photos/600/600?random=3',
    image2: 'https://picsum.photos/600/600?random=30',
    title: 'vavavf',
    isNew: true,
    oldPrice: 33,
    newPrice: 23,
  },
  {
    id: 4,
    image1: 'https://picsum.photos/600/600?random=3',
    image2: 'https://picsum.photos/600/600?random=30',
    title: 'vavavf',
    isNew: true,
    oldPrice: 33,
    newPrice: 23,
  },
  {
    id: 5,
    image1: 'https://picsum.photos/600/600?random=3',
    image2: 'https://picsum.photos/600/600?random=30',
    title: 'vavavf',
    isNew: true,
    oldPrice: 33,
    newPrice: 23,
  },
  {
    id: 6,
    image1: 'https://picsum.photos/600/600?random=3',
    image2: 'https://picsum.photos/600/600?random=30',
    title: 'vavavf',
    isNew: true,
    oldPrice: 33,
    newPrice: 23,
  },

]










const FeaturedProducts = (props) => {

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{props.types} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>


      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}


        {/* {data.map((data) => (

          <div key={data.id}>
            <img src={data.image1} alt='' />
          </div>

        )

        )} */}

      </div>
    </div>
  );
}


export default FeaturedProducts;