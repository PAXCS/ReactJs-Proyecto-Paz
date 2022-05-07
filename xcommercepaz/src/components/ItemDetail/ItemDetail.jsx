import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({ item }) {
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

export default ItemDetail