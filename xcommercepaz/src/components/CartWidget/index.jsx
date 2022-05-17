import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart-context';
import Bubble from '../Bubble/Bubble';
import './CartWidget.css';
import cartWidget from './cartWidget.svg';

const CartWidget = () => {
    const cartCtx = useContext(CartContext);

    return (
        <div className='carrito-conteiner' >
            <Link to='/cart'>
                <img className='carrito' src={cartWidget} width="400%" alt="carrito" />
                {cartCtx.products.length !== 0 && 
              <div className='cart-bubble'>
                <Bubble>
                  { cartCtx.getCartQuantity() }
                </Bubble>
              </div>
            }
            </Link>
          
        </div>
      )
    };


export default CartWidget;