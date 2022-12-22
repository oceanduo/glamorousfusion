import React from 'react';
import Card from '../Card/Card';
import "./list.scss"

function List() {

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
          image1: 'https://picsum.photos/600/600?random=4',
          image2: 'https://picsum.photos/600/600?random=30',
          title: 'vavavf',
          isNew: true,
          oldPrice: 33,
          newPrice: 23,
        },
        {
          id: 5,
          image1: 'https://picsum.photos/600/600?random=5',
          image2: 'https://picsum.photos/600/600?random=30',
          title: 'vavavf',
          isNew: true,
          oldPrice: 33,
          newPrice: 23,
        },
        {
          id: 6,
          image1: 'https://picsum.photos/600/600?random=6',
          image2: 'https://picsum.photos/600/600?random=30',
          title: 'vavavf',
          isNew: true,
          oldPrice: 33,
          newPrice: 23,
        },
      
      ]
      
      
      

  return (
    <div className='list'>
        {data.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List