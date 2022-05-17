import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';
import Bubble from '../Bubble/Bubble';
import './CartItem.css';

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <>
        <div className='card-cart row '>
            <div className='info-cart  row col-12'>
                <h2>{ item?.title }</h2>
                <div className='bubble-remove'>
                <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>X</Bubble>
                </div>
                <div className='bubble-quantity' >
                <Bubble>{ item?.quantity }</Bubble>
                </div>
                <img className='img-product-detail-cart' src={ item?.pictureUrl } alt="Imagen del producto" />
                <div className='bubble-remove'>
            </div>
                <h3>${ item?.price }</h3>
            </div> 
        </div>
       
        
    </>
  )
}

export default CartItem