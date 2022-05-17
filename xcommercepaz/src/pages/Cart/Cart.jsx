import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import CartItem from "../../components/CartItem/CartItem";
import CartContext from "../../context/cart-context";
import './Cart.css';

function Cart(){
    const cartCtx=useContext(CartContext);

    return(
            
                <div >
                    {cartCtx.products.map(p => <CartItem item={p} key={p.id}/>)}
                    {cartCtx.products.length !==0?
                    <div className='detail-info-container'>
                        <h2 className="total-price">Precio total: ${cartCtx.getTotalPrice()}</h2>
                        <button className="terminar-compra">Terminar compra</button>
                    </div>:
                    <div className="empty-container row col-4">
                        <h2>No hay productos en el carrito</h2>
                        <button className='button-inicio'>
                        <Link to='/'>Ir al inicio</Link>
                        </button>
                    </div>
                    }
                </div>
           

        )
  }


export default Cart