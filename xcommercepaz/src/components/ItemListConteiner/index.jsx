import React from 'react';
import ItemCount from '../ItemCount/index';
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    function zonza() {
        console.log("Agregado al carrito");
    }
    return (
        <>
          <div>
            <ItemCount initial={0} stock={5} onAdd={zonza}/>
          </div>
          <div className='bienvenida'>
            {greeting}
          </div>
        </>

    );
};

export default ItemListContainer;