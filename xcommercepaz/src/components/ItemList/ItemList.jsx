import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

//Componente que devuelve la lista de productos

function ItemList ({items}) {
 
    return (
        <>
          <div className='item-list-container row col-12'>
          {items.map(item => <Item item={item} key={item.id} />)}
          </div> 
        </>

    ); 
};

export default ItemList;



