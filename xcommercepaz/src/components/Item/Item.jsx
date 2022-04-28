import React from 'react';
import './Item.css';


function Item ({item}) {
  return (
    <div className='card row col-4'>
      <div className='nombre-articulo'>{ item.title }</div>
      <div className='content'>
          <div className='img-container'>
              <img className='img-producto' src={item.pictureUrl} alt="Imagen del producto" />
          </div>
      </div>
      <div className='precio-articulo'>{ item.price }</div>
    </div>
    
)
  
};

export default Item;