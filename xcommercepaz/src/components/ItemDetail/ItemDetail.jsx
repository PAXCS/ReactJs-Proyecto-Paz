import React from "react";
import {useContext, useState, useEffect } from 'react';
import CartContext from "../../context/cart-context";
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

//Componente que nos trae producto individualmente con el detalle de cada uno

function ItemDetail({ item }) {
    const cartCtx = useContext(CartContext);

    function addHandler(quantityToAdd) {
        cartCtx.addProduct({quantity: quantityToAdd, ...item});
    }

    return (
            <div className='detail-container card row col-6'>
                <div className='nombre-articulo'>{ item.title }</div>
                    <div className='content'>
                        <div className='img-container'>
                            <img className='img-producto-detail' src={ item.pictureUrl} alt="Imagen del producto" /> 
                        </div>  
                    </div>
                <div className='precio-articulo'>$ { item.price }</div>
                
                <div className='confirmar-buttom-container'>  
                
                    {cartCtx.isInCart(item.id) ?
                    <div className="confirmar-buttom">  Agregaste {cartCtx.getCartQuantity() == 1 ? ' ' + cartCtx.getCartQuantity() + ' producto al carrito' : 
                    ' ' + cartCtx.getCartQuantity()  + ' productos al carrito'}
                    </div> :

                   <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />}      
                    
                </div>

                {/* Botonera con los metodos aplicados */}

                <div className="metodos-container">
                        <button className="metodos-compra" onClick={() => console.log(cartCtx.products)} >Imprimir carrito</button>
                        <button className="metodos-compra" onClick={() => cartCtx.removeProduct(item.id)} >Remove product</button>
                        <button className="metodos-compra" onClick={() => cartCtx.clear()} >Clear</button>
                        <button className="metodos-compra" onClick={() => console.log(cartCtx.isInCart(item.id))} >Is in cart</button>
                        <button className="quantity" onClick={() => console.log(cartCtx.getCartQuantity())} >Quantity</button>
                    </div> 
                    <div className="info-articulo card " >{item.detail}</div>
            </div>
    )
};

export default ItemDetail
















/* function ItemDetail({ item }) {
    const [productsQuantity, setProductsQuantity] = useState(null);
    function addHandler(quantityToAdd) {
        setProductsQuantity (quantityToAdd); 
    }
    return (
        <div  >
            <div className='detail-container card row col-6'>
                <div className='nombre-articulo'>{ item.title }</div>
                    <div className='content'>
                        <div className='img-container'>
                            <img className='img-producto-detail' src={ item.pictureUrl} alt="Imagen del producto" />
                        </div>
                    </div>
                <div className='precio-articulo'>{ item.price }</div>
                
                <div className='confirmar-buttom-container'>
                    {productsQuantity ?                
                    <button className="button-container"><Link to ='/cart'> Comprar  {productsQuantity == 1 ? productsQuantity + ' Producto' : productsQuantity + ' Productos'}</Link></button> :
                        <ItemCount initial={0} stock={ item.stock } onAdd={addHandler}/>
                    }
                </div>
                <div className="info-articulo card " >{item.detail}</div>
            </div>
            
        </div>
    )   
}

export default ItemDetail */