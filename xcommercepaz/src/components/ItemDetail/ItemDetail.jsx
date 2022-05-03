import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({ item }) {
    return (
        <div  >
            <div className='detail-container card row col-6'>
                <div className='nombre-articulo'>{ item.title }</div>
                    <div className='content'>
                        <div className='img-container'>
                            <img className='img-producto' src={item.pictureUrl} alt="Imagen del producto" />
                        </div>
                    </div>
                <div className='precio-articulo'>{ item.price }</div>
                
                <div>
                    <ItemCount initial={0} stock={5} onAdd={()=>{}}/>
                </div>
                <div className="info-articulo card " >{item.detail}</div>
            </div>
            
        </div>
    )   
}

export default ItemDetail