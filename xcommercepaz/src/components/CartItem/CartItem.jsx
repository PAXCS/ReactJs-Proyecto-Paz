import React, { useContext } from 'react';
import CartContext from '../../context/cart-context';
import Bubble from '../Bubble/Bubble';
import { Link } from 'react-router-dom';
import './CartItem.css';

//Componente con el detalle dentro del carrito con los productos a comprar

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  return (
    <>     
    <div className='card-cart row col-4'>
        <div className='nombre-articulo-cart'>
            <span className='articulo-name'>
            { item.title }
            </span>
            
        </div>
        <div>
            <div className='img-container-cart'>
                <Link to={'/item/' + item?.id}> <img className='img-producto-cart' src={item.pictureUrl} alt="Imagen del producto" /></Link>
            </div>
        </div>
        <div className='precio-articulo-cart'>{'$ ' + item.price }</div>
        <div className='bubble-remove'>
            <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(item.id)}>ELIMINAR</Bubble>
        </div>
        <span className='bubble-quantity' >CANT<Bubble>{': ' + item?.quantity }
        </Bubble>
        </span>          
                
    </div>
    </>

  )
}

export default CartItem