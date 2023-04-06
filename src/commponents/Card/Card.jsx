import React from 'react';
import './card.scss';
import {Link} from 'react-router-dom';


const Card = ({item}) => {
   
    return (
      <Link className="link" to={`/product/${item.id}`}>
        <div className="card">
          <div className="image">
          {item?.isNew && <span>New Arrival</span>}
            <img
              src={item.image1}
              alt=""
              className="mainImg"
            />
            <img
              src={
              item.image2}
              alt=""
              className="secondImg"
            />
          </div>

          <h2>{item?.title}</h2>
         
          <div className="prices">
            { item.sale && <h3 style={{textDecoration: 'line-through'}}>${Math.round(item.price * 1.2)} .00</h3>  }
            <h3>${item?.price}</h3>
          </div>
        </div>
      </Link>
    );
  };

export default Card

// import React from 'react';
// import './card.scss';
// import {Link} from 'react-router-dom';


// const Card = ({item}) => {
//     console.log(item);
//     console.log(item.attributes.img.data.attributes.url)
//     return (
//       <Link className="link" to={`/product/${item.id}`}>
//         <div className="card">
//           <div className="image">
//           {item?.attributes.isNew && <span>New Arrival</span>}
//             <img
//               src={"http://localhost:1337"+ item.attributes?.img?.data?.attributes?.url}
//               alt=""
//               className="mainImg"
//             />
//             <img
//               src={
//                  "http://localhost:1337"+ item.attributes?.img2?.data?.attributes?.url}
//               alt=""
//               className="secondImg"
//             />
//           </div>

//           <h2>{item?.attributes.title}</h2>
         
//           <div className="prices">
//             <h3>${Math.round(item?.attributes.price * 1.2) }.00</h3>
//             <h3>${item?.attributes.price}</h3>
//           </div>
//         </div>
//       </Link>
//     );
//   };

// export default Card