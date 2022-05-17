import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';


function Item ({item}) {
  return (
    <div className='card row col-4'>
      <div className='nombre-articulo'>{ item.title }</div>
      <div className='content'>
          <div className='img-container'>
              
              <Link to={'/item/' + item?.id}> <img className='img-producto' src={item.pictureUrl} alt="Imagen del producto" /></Link>
          </div>
      </div>
      <div className='precio-articulo'>{'$' + item.price }</div>
    </div>
    
)
  
};

export default Item;