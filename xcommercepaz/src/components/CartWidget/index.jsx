import React from 'react';
import './CartWidget.css';
import cartWidget from './cartWidget.svg';

const CartWidget = () => {
    return (
        <>
        <img className='carrito' src={cartWidget} width="6%" alt="carrito" />
        </>
      
    )
};

export default CartWidget;