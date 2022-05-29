import React from 'react';
import './Bubble.css';

//Componente con el las burbujas para ver la cantidad de productos y removerlos, aplicados tanto al widget del carrito como al listado del carrito

function Bubble({ children, isButton, onBubbleClick }) {
  return (
    <div className={`${isButton ? 'bubble-button' : ''}`} onClick={() => isButton && onBubbleClick()}>
        { children }
    </div>
  )
}

export default Bubble