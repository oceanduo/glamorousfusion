
import Card from '../Card/Card';
import "./list.scss"
import React, { useState, useEffect } from 'react'

import database from '../../Data';

function List(props) {

  const data = database
  const [newdata, setNewdata] = useState(data)


  useEffect(
    () => {

      
      setNewdata(data.filter(e => props.selectedCats.includes(e.category) && e.price < props.maxPrice).sort((a, b) => (a.price > b.price) ? 1 : -1))

      // {props.sort ==='asc' ? a.price > b.price : a.price < b.price }
     
    }, [props.selectedCats, props.maxPrice, props.sort]
  )



  console.log(props.selectedCats + 'the price is ' + props.maxPrice + JSON.stringify(newdata) + 'my new list' + props.sort)



  return (
    <div className='list'>

{newdata.map((item) => (

<Card key={item.id} item={item} />



)

)}

    </div>
  )
}

export default List


// {data.map((item)=>(
//   <Card item={item} key={item.id}/>
// ))} 

// const data = [
//   {
//     id: 1,
//     image1: 'https://picsum.photos/600/600?random=1',
//     image2: 'https://picsum.photos/600/600?random=10',
//     title: 'xac',
//     isNew: true,
//     oldPrice: 3,
//     newPrice: 1,
//   },
//   {
//     id: 2,
//     image1: 'https://picsum.photos/600/600?random=2',
//     image2: 'https://picsum.photos/600/600?random=20',
//     title: 'cawec',
//     isNew: false,
//     oldPrice: 44,
//     newPrice: 33,
//   },
//   {
//     id: 3,
//     image1: 'https://picsum.photos/600/600?random=3',
//     image2: 'https://picsum.photos/600/600?random=30',
//     title: 'vavavf',
//     isNew: true,
//     oldPrice: 33,
//     newPrice: 23,
//   },
//   {
//     id: 4,
//     image1: 'https://picsum.photos/600/600?random=4',
//     image2: 'https://picsum.photos/600/600?random=30',
//     title: 'vavavf',
//     isNew: true,
//     oldPrice: 33,
//     newPrice: 23,
//   },
//   {
//     id: 5,
//     image1: 'https://picsum.photos/600/600?random=5',
//     image2: 'https://picsum.photos/600/600?random=30',
//     title: 'vavavf',
//     isNew: true,
//     oldPrice: 33,
//     newPrice: 23,
//   },
//   {
//     id: 6,
//     image1: 'https://picsum.photos/600/600?random=6',
//     image2: 'https://picsum.photos/600/600?random=30',
//     title: 'vavavf',
//     isNew: true,
//     oldPrice: 33,
//     newPrice: 23,
//   },

// ]
